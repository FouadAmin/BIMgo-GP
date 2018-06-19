using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BIMGo.Models
{

    public class Post
    {
        public int Id { get; set; }
        [Required]
        public string CategoryId { get; set; }
        public Category Category { get; set; }
        [Required]
        [StringLength(400)]
        public string Subject { get; set; }
        [Required]
        [StringLength(5000)]
        public string Body { get; set; }
        [Required]
        [DataType(DataType.DateTime)]
        public DateTime PublicationDate { get; set; }
        public string AuthorName { get; set; }
        public int Readers { get; set; }
        public int ImageURL { get; set; }

    }
}
