using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Formatters;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace BimAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // adding mvc middleWare to the services
            // adding xml serializer as an option for out put
            // note that json is the default
            services.AddMvc()
                .AddMvcOptions(opt =>
                {
                    opt.OutputFormatters.Add
                    (
                        new XmlDataContractSerializerOutputFormatter()
                    );
                });

            // Null disables the option of lowering case of first charachter of each Property Name
            //.AddJsonOptions(o => {
            //    if (o.SerializerSettings.ContractResolver != null)
            //    {
            //        var castedResolver = o.SerializerSettings.ContractResolver
            //            as DefaultContractResolver;
            //        castedResolver.NamingStrategy = null;
            //    }
            //});
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            //this allow the app to respond to the html request with a user friendly page with the status message  
            app.UseStatusCodePages();

            // adding mvc to the app after passing the exception
            app.UseMvc();
        }
    }
}
