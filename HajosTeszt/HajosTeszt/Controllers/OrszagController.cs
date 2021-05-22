using HajosTeszt.CountryModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace HajosTeszt.Controllers
{
    [Route("api/countries")]
    [ApiController]
    public class OrszagController : ControllerBase
    {
        // GET: api/countries
        [HttpGet]
        public IEnumerable<Country> Get()
        {
            StudentContext context = new StudentContext();
            return context.Countries.ToList();
        }

        // GET api/countries/5
        [HttpGet("{id}")]
        public Country Get(int id)
        {
            StudentContext context = new StudentContext();
            var keresettOrszag= (from x in context.Countries
                                where x.Id == id
                                select x).FirstOrDefault();
            return keresettOrszag;
        }

        // POST api/countries
        [HttpPost]
        public void Post([FromBody] Country ujOrszag)
        {
            StudentContext context = new StudentContext();
            context.Countries.Add(ujOrszag);
            context.SaveChanges();
        }

        // PUT api/countries/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/countries/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            StudentContext context = new StudentContext();
            var törlendőOrszag = (from x in context.Countries
                                where x.Id == id
                                select x).FirstOrDefault();
            if (törlendőOrszag != default)
            {
                context.Remove(törlendőOrszag);
                context.SaveChanges();
            }
           
        }

        [HttpGet]
        [Route("count")]
        public int OsszesOrszag()
        {
            StudentContext context = new StudentContext();
            int orszagok = context.Countries.Count();

            return orszagok;
        }
    }
}
