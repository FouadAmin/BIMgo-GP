using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Identity.Models.Models
{
    [Table("IFCFile")]
    public class IFCFile : File
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("ApplicationUser")]
        public string FK_ApplicatioUserId { get; set; }
        public ApplicationUser ApplicationUser { get; set; }


        //public IFCFile()
        //{

        //}
    }
}
