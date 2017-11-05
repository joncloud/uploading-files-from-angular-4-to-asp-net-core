using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using Microsoft.AspNetCore.Mvc;

namespace uploading_files_from_angular_4_to_asp_net_core.Controllers
{
    public class AttachmentsController : Controller
    {
        [HttpPost("/upload")]
        public async Task<IActionResult> UploadAsync()
        {
            using (var stream = Request.Form.Files[0].OpenReadStream())
            using (var streamReader = new StreamReader(stream))
            {
                string contents = await streamReader.ReadToEndAsync();
                return Ok(new {
                    Contents = contents
                });
            }
        }
    }
}
