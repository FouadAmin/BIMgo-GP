using AdapterServiceClasses;
using BimClasses.BimModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;

namespace BimAPI.Controllers
{
    public class BimIOController : ApiController
    {
        public IHttpActionResult GetTest()
        {
            var result = new List<string>() { "BimIO", "Controller", "is", "Working", "under", "framework" };
            return Ok(result);
        }

        public IHttpActionResult GetTestInput(string path)
        {
            var result = $"the path is : {path}";

            return Ok(result);
        }

        public IHttpActionResult GetBimModelListedFromFullPath(string fullPath)
        {
            //fullPath = ReplaceSlashWithDoubleSlash(fullPath);

            BimModelListed bimModelListed = Ifc_Bim_Model.GetListedModelFromPath(fullPath);

            return Ok(bimModelListed);
        }

        public IHttpActionResult GetBimModelListedFromPathAndName(string filePath, string fileName)
        {
            BimModelListed bimModelListed = Ifc_Bim_Model.GetListedModelFromPath(filePath, fileName);

            return Ok(bimModelListed);
        }
        public IHttpActionResult GetBimModelListedFromDefaultPath()
        {
            BimModelListed bimModelListed = Ifc_Bim_Model.GetListedModelFromPath("D:\\IFCSamples\\New_Str_New_Arch");

            return Ok(bimModelListed);
        }

        public IHttpActionResult GetBimModelListedByName(string fileName)
        {
            string fullPath = $"D:\\IFCSamples\\{fileName}";
            BimModelListed bimModelListed = Ifc_Bim_Model.GetListedModelFromPath(fullPath);

            return Ok(bimModelListed);
        }


        public IHttpActionResult SaveBimModelListedAsStrByName(string fileName,[FromBody] BimModelListed bimModelListed)
        {
            string fullPath = $"D:\\IFCSamples\\{fileName}";
            Ifc_Bim_Model.SaveBimModelAsStructure(bimModelListed,fullPath);

            return Ok($"Model Saved Structural at => {fullPath} ");
        }


        public IHttpActionResult SaveBimModelListedAsArchByName(string fileName, [FromBody] BimModelListed bimModelListed)
        {
            string fullPath = $"D:\\IFCSamples\\{fileName}";
            Ifc_Bim_Model.SaveBimModelAsArchitecture(bimModelListed, fullPath);

            return Ok($"Model Saved Architecture at => {fullPath} ");
        }


        public IHttpActionResult SaveBimModelListedAsStrByNameAndPath(string fileName, string filePath, [FromBody] BimModelListed bimModelListed)
        {
            string fullPath = $"{filePath}{fileName}";
            Ifc_Bim_Model.SaveBimModelAsStructure(bimModelListed, fullPath);

            return Ok($"Model Saved Structural at => {fullPath} ");
        }


        public IHttpActionResult SaveBimModelListedAsArchByNameAndPath(string fileName, string filePath, [FromBody] BimModelListed bimModelListed)
        {
            string fullPath = $"{filePath}{fileName}";
            Ifc_Bim_Model.SaveBimModelAsArchitecture(bimModelListed, fullPath);

            return Ok($"Model Saved Architecture at => {fullPath} ");
        }


        public static string ReplaceSlashWithDoubleSlash( string path)
        {
            return path.Replace(@"\", @"\\");
        }
    }
}
