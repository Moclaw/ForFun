using System;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using project_x_d.Data;

namespace project_x_a.Controllers
{
    [AllowAnonymous]
    [Route("api/[controller]/[action]")]
    public class AuthController : Controller
    {
        private readonly ApplicationDbContext _context;

        public AuthController(ApplicationDbContext context)
        {
            _context = context;
        }
    }
}