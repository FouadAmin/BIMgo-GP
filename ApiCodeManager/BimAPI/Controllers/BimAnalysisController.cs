using AdapterServiceClasses;
using BimClasses.BimModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BimAPI.Controllers
{
    public class BimAnalysisController : ApiController
    {
        public IHttpActionResult AnalyzeModelSent(string analysisFilePath, string fileName, [FromBody] BimModelListed bimModelListed, double pointsTolerance = 0.01, double maximumShellMeshSize = 1000)
        {

            BimModelListed bimModelListed_Analyzed = Sap_Bim_Model.AnalyseModelListed(bimModelListed, analysisFilePath,  fileName,  pointsTolerance ,  maximumShellMeshSize );

            return Ok(bimModelListed_Analyzed);
        }

        public IHttpActionResult AnalyzeModelFromPathAndName(string sourceFilePath, string fileName, string analysisFilePath, double pointsTolerance = 0.01, double maximumShellMeshSize = 1000)
        {
            BimModelListed bimModelListed = Ifc_Bim_Model.GetListedModelFromPath(sourceFilePath, fileName);

            BimModelListed bimModelListed_Analyzed = Sap_Bim_Model.AnalyseModelListed(bimModelListed, analysisFilePath, fileName, pointsTolerance, maximumShellMeshSize);

            return Ok(bimModelListed_Analyzed);
        }
    }
}
