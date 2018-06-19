using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;
//using System.Web.Http.Cors;

namespace BimAPI
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services




            //to cancel circular referencing
            config.Formatters.JsonFormatter.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
            //asking to use xml with out providing proper tool wich leads to using json
            config.Formatters.XmlFormatter.UseXmlSerializer = true;
            //to order the return 
            config.Formatters.JsonFormatter.Indent = true;


            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "Api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            //added route for Remote Procedure Calling
            config.Routes.MapHttpRoute(
                name: "BimRouting",
                routeTemplate: "BimAPI/{controller}/{action}/{path}",
                defaults: new { path = RouteParameter.Optional }
            );


            //////////////////////////////////////////////////////////

            //// Web API configuration and services

            // to enable exterior url to call the service
            EnableCorsAttribute cors = new EnableCorsAttribute("*"/*url*/, "*"/*header*/, "*"/*method type like GET*/);
            config.EnableCors(cors);





            //// Web API routes
            //config.MapHttpAttributeRoutes();

            //config.Routes.MapHttpRoute(
            //    name: "DefaultApi",
            //    routeTemplate: "api/{controller}/{id}",
            //    defaults: new { id = RouteParameter.Optional }
            //);

            ////added route for Remote Procedure Calling
            //config.Routes.MapHttpRoute(
            //    name: "DefaultRPC",
            //    routeTemplate: "rpc/{controller}/{action}/{id}",
            //    defaults: new { id = RouteParameter.Optional }
            //);

        }
    }
}
