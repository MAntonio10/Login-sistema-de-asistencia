using AngularAuthAPI.Context;
using AngularAuthAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AngularAuthAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly LogineContext _autenticacionContext;
        public UserController(LogineContext logineContext)
        {
            _autenticacionContext = logineContext;
        }


        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate([FromBody] User userObj)
        {
            if (userObj == null)

                return BadRequest();

            var user = await _autenticacionContext.Users
                .FirstOrDefaultAsync(x => x.Username == userObj.Username && x.Password == userObj.Password);
            if (user == null)
                return NotFound(new { Message = "Usuario no Encontrado" });

            return Ok(new
            {
                Message = "Acceso Exitoso"
            });
        }


        [HttpPost("register")]
        public async Task<IActionResult> RegisterUser([FromBody] User userObj)
        {
            if (userObj == null)
                return BadRequest();

            await _autenticacionContext.Users.AddAsync(userObj);
            await _autenticacionContext.SaveChangesAsync();
            return Ok(new
            {
                Message = "Estudiante Registrado"
            });
        }
    }
}
