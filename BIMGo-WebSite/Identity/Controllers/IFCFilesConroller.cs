using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Identity.Data;
using Microsoft.AspNetCore.Authorization;
using Identity.Models.Models;
using Microsoft.AspNetCore.Identity;
using Identity.Models;
using Microsoft.AspNetCore.Hosting;
using System.IO;
using System.Net.Http.Headers;

namespace Identity.Controllers
{
    [Authorize]
    public class IFCFilesController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly IFCFileRepository repo;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly IHostingEnvironment _hostingEnvironment;
        private readonly UserManager<ApplicationUser> _userManager;

        public IFCFilesController(ApplicationDbContext context, SignInManager<ApplicationUser> signInManager, IHostingEnvironment hostingEnvironment, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            repo = new IFCFileRepository(context);
            _signInManager = signInManager;
            _hostingEnvironment = hostingEnvironment;
            _userManager = userManager;
        }

        public async Task<IActionResult> Index()
        {
            var currentUser = await _userManager.FindByNameAsync(User.Identity.Name);

            var userfiles = repo.GetAllFiles();
            return View(await userfiles.Where(c => c.FK_ApplicatioUserId == currentUser.Id).ToListAsync());
        }
        // GET: ObjFiles/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var ifcFile = await repo.GetAllFiles()
                .Include(o => o.ApplicationUser)
                .SingleOrDefaultAsync(m => m.Id == id);
            if (ifcFile == null)
            {
                return NotFound();
            }

            return View(ifcFile);
        }

        // GET: ObjFiles/

        public IActionResult Create()
        {

            ViewData["FK_ApplicatioUserId"] = new SelectList(_context.Users, "Id", "Id");
            return View();
        }

        // POST: ObjFiles/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        //[ValidateAntiForgeryToken]
        public IActionResult Create([Bind("Id,FK_ApplicatioUserId,StaticFilePath,RelativeFilePath,UploadedTime")] IFCFile ifcFile)
        {
            if (ModelState.IsValid)
            {
                repo.Add(ifcFile);
                return RedirectToAction(nameof(Index));
            }
            ViewData["FK_ApplicatioUserId"] = new SelectList(User.Identity.Name, "Id", "Id", ifcFile.FK_ApplicatioUserId);
            return Ok(ifcFile);
        }

        // GET: ObjFiles/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var ifcFile = await repo.GetAllFiles().SingleOrDefaultAsync(m => m.Id == id);
            if (ifcFile == null)
            {
                return NotFound();
            }
            ViewData["FK_ApplicatioUserId"] = new SelectList(User.Identity.Name, "Id", "Id", ifcFile.FK_ApplicatioUserId);
            return View(ifcFile);
        }

        // POST: ObjFiles/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,FK_ApplicatioUserId,StaticFilePath,RelativeFilePath,UploadedTime")] IFCFile ifcFile)
        {
            if (id != ifcFile.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(ifcFile);
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!IFCFileExists(ifcFile.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            ViewData["FK_ApplicatioUserId"] = new SelectList(User.Identity.Name, "Id", "Id", ifcFile.FK_ApplicatioUserId);
            return View(ifcFile);
        }

        // GET: ObjFiles/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var ifcFile = await repo.GetAllFiles()
                .Include(o => o.ApplicationUser)
                .SingleOrDefaultAsync(m => m.Id == id);
            if (ifcFile == null)
            {
                return NotFound();
            }

            return View(ifcFile);
        }

        // POST: ObjFiles/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var ifcFile = await repo.GetAllFiles().SingleOrDefaultAsync(m => m.Id == id);
            repo.Delete(ifcFile);
            return RedirectToAction(nameof(Index));
        }

        private bool IFCFileExists(int id)
        {
            return repo.GetAllFiles().Any(e => e.Id == id);
        }


        public IActionResult Upload()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> Upload(FileData fileData)
        {

            if (ModelState.IsValid)
            {
                var CurrentDate = DateTime.Now;
                var UploadDate = CurrentDate.ToString("yyyyMMdd_hhmmss");
                var userfileName = User.Identity.Name.ToString();
                var RootFolder = _hostingEnvironment.WebRootPath;
                var UsersFileLocation = "UsersDirectory";
                var RootFfolderString = "wwwroot";
                var ObjFileExtension = ".ifc";
                var UserDirectory = $"{_hostingEnvironment.WebRootPath}/{UsersFileLocation}/{userfileName}/{UploadDate}";
                //var UserFilesDirectoryRelative = $"{RootFfolderString}/{UsersFileLocation}/{userfileName}/{UploadDate}";
                var UserFilesDirectoryRelative = $"{UsersFileLocation}/{userfileName}/{UploadDate}";
                //var ImageFileLocationPaths = new List<String>();
                //Check if user Directory exsists , if not creates new directory 
                var exsits = Directory.Exists(UserDirectory);
                if (!exsits)
                {
                    Directory.CreateDirectory(UserDirectory);
                }
                foreach (var IFCFile in fileData.IFCFile)
                {

                    var filePathName = ContentDispositionHeaderValue.Parse(IFCFile.ContentDisposition).FileName.Trim('"');
                    var fileExtention = Path.GetExtension(filePathName);
                    if (!(fileExtention == ".ifc" || fileExtention == ".IFC"))
                    {
                        return RedirectToAction("ErrorPage");
                    }
                    var uploads = Path.Combine(RootFolder, UsersFileLocation, userfileName, UploadDate);
                    var fileName = Guid.NewGuid().ToString("N").Substring(0, 10);
                    var FileNameFull = fileName + fileExtention;
                    var FileNameObj = fileName + ObjFileExtension;
                    var StaticPath = Path.Combine(uploads, FileNameFull);
                    var StaticPathNameNoExtension = Path.Combine(uploads, fileName);
                    var RelativePaths = $"{UserFilesDirectoryRelative}/{fileName}" + $"{ObjFileExtension}";
                    //the image will be saved with a unique filename
                    FileStream DestinationStream = new FileStream(StaticPath, FileMode.CreateNew);
                    //ImageFileLocationPaths.Add(PathObjRelative);
                    //the image will be saved with a unique filename
                    // ImageFile.CopyToAsync(DestinationStream);
                    IFCFile.CopyTo(DestinationStream);
                    var currentUser = await _userManager.FindByNameAsync(User.Identity.Name);

                    var ObjectFile = new IFCFile
                    {
                        FileName = FileNameObj,
                        StaticFilePath = StaticPathNameNoExtension + ObjFileExtension,
                        RelativeFilePath = uploads,// Replaced with directory path
                        FK_ApplicatioUserId = currentUser.Id,
                        UploadedTime = CurrentDate
                    };
                    repo.Add(ObjectFile);



                }
            }
            //var ImageFileLocationArray = ImageFileLocationPaths.ToArray();
            return RedirectToAction("UploadCompelete");
        }


        public async Task<IActionResult> Download(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var objFile = await repo.GetAllFiles().SingleOrDefaultAsync(m => m.Id == id);
            var path = objFile.StaticFilePath;

            var memory = new MemoryStream();
            using (var stream = new FileStream(path, FileMode.Open))
            {
                await stream.CopyToAsync(memory);
            }
            memory.Position = 0;
            return File(memory, GetContentType(path), Path.GetFileName(path));
        }

        private string GetContentType(string path)
        {
            var types = GetMimeTypes();
            var ext = Path.GetExtension(path).ToLowerInvariant();
            return types[ext];
        }
        private Dictionary<string, string> GetMimeTypes()
        {
            return new Dictionary<string, string>
            {
                {".txt", "text/plain"},
                {".pdf", "application/pdf"},
                {".doc", "application/vnd.ms-word"},
                {".docx", "application/vnd.ms-word"},
                {".xls", "application/vnd.ms-excel"},
                {".xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"},
                {".png", "image/png"},
                {".jpg", "image/jpeg"},
                {".jpeg", "image/jpeg"},
                {".gif", "image/gif"},
                {".csv", "text/csv"},
                {".obj" ,"application/obj"},
                {".xyz" ,"application/xyz"},
                {".dxf","application/dxf" },
                {".ifc","application/ifc" }
            };
        }
        public IActionResult UploadCompelete()
        {
            return View();
        }

        public IActionResult ErrorPage()
        {
            ViewBag.Error = "Please upload an Image file with Proper Extension";
            return View();

        }
        //public IActionResult BIMGo()
        //{
        //    string Path = Convert.ToString(TempData["Path"]);// id will be 10;
        //    ViewBag.data1 = Path;
        //    return View();

        //}
        //public async Task<IActionResult> GetDataFromAPI(string FileName,string StaticFilePath,string RelativeFilePath, string ApplicationUserID)
        //{

        //            var IFCFileDb = new IFCFile
        //            {
        //                FileName = FileName,
        //                StaticFilePath = StaticFilePath,
        //                RelativeFilePath = RelativeFilePath, // It is Folder Path
        //                FK_ApplicatioUserId = ApplicationUserID,
        //            };
        //            repo.Add(IFCFileDb);
        //            //_signInManager.UserManager.GetUserId()
        //        }

        public IActionResult AccesDbfromAjax([Bind("Id,FileName,FK_ApplicatioUserId,StaticFilePath,RelativeFilePath,UploadedTime")] IFCFile ifcFile)
        {
            if (ModelState.IsValid)
            {
                repo.Add(ifcFile);
                return RedirectToAction(nameof(Index));
            }
            //ViewData["FK_ApplicatioUserId"] = new SelectList(User.Identity.Name, "Id", "Id", ifcFile.FK_ApplicatioUserId);
            return Ok(ifcFile);
        }
    }
}

