using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Identity.Models.Models
{
    public class FileData
    {
        [Required]
        [Display(Name = "IFCFile")]
        public List<IFormFile> IFCFile { get; set; }
    }
}

