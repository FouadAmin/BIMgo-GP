using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Identity.Models.Models
{
    public class File
    {
        public string FileName { get; set; }
        public string StaticFilePath { get; set; }
        public string RelativeFilePath { get; set; }
        public DateTime UploadedTime { get; set; }
    }
}

