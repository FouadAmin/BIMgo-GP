using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BIMGo.Models
{

    public class Category
    {
        public int Id { get; set; }
        [Required(ErrorMessage ="Category name is Reuired")]
        public string Name { get; set; }
        [Required(ErrorMessage ="Category Descriptio is Required")]
        [StringLength(10)]
        public string Description { get; set; }
    }
}
