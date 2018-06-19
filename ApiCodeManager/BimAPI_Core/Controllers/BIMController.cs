using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AdapterServiceClasses;
using BimClasses.BimModels;
using Microsoft.AspNetCore.Mvc;

namespace BimAPI.Controllers
{
    [Route("Api/Bim")]
    public class BIMController : Controller
    {

        [HttpGet()]
        public IActionResult BimTest()
        {
            return Ok("Bim Controller is Working _ Core");
        }


        [HttpGet("{fullPath}")]
        public IActionResult GetListedModel(string fullPath)
        {
            BimModelListed bimModelListed = Ifc_Bim_Model.GetListedModelFromPath(fullPath);
            if (bimModelListed == null)
            {
                return NotFound();
            }

            return Ok(bimModelListed);
        }

        [HttpGet("DefaultModel")]
        public IActionResult GetDefaultListedModel()
        {
            BimModelListed bimModelListed = Ifc_Bim_Model.GetListedModelFromPath("D:\\IFCSamples\\New_Str_New_Arch");
            if (bimModelListed == null)
            {
                return NotFound();
            }

            return Ok(bimModelListed);
        }

    }
}