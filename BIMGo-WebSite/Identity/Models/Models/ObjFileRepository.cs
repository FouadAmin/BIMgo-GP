using Identity.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Identity.Models.Models
{
    public class IFCFileRepository : IIFCFileRepository
    {
        private readonly ApplicationDbContext _applicationDbContext;

        public IFCFileRepository(ApplicationDbContext applicationDbContext)
        {
            _applicationDbContext = applicationDbContext;
        }

        public IFCFile Add(IFCFile ifcFile)
        {
            _applicationDbContext.IFCFiles.Add(ifcFile);
            return _applicationDbContext.SaveChanges() > 0 ? ifcFile : null;
        }

        public bool Delete(IFCFile ifcFile)
        {
            _applicationDbContext.IFCFiles.Remove(ifcFile);
            return _applicationDbContext.SaveChanges() > 0;
        }

        public IQueryable<IFCFile> GetAllFiles()
        {
            return _applicationDbContext.IFCFiles;
        }

        public List<IFCFile> GetAllFilesBind()
        {
            return _applicationDbContext.IFCFiles.ToList();
        }

        public IFCFile GetById(params object[] id)
        {
            return _applicationDbContext.IFCFiles.Find(id);
        }

        public bool Update(IFCFile ifcFile)
        {
            _applicationDbContext.IFCFiles.Attach(ifcFile);
            _applicationDbContext.Entry(ifcFile).State = EntityState.Modified;
            return _applicationDbContext.SaveChanges() > 0;
        }
    }
}
