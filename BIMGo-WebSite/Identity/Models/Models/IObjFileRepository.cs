using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Identity.Models.Models
{
    public interface IIFCFileRepository
    {
        IFCFile Add(IFCFile ifcFile);
        IQueryable<IFCFile> GetAllFiles();
        List<IFCFile> GetAllFilesBind();
        IFCFile GetById(params object[] id);
        bool Update(IFCFile ifcFile);
        bool Delete(IFCFile ifcFile);

    }
}
