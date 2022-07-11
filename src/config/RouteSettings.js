const RouteSettings = {
   
    parseRequestURL: () => {
  
      const url = location.hash.slice(1).toLowerCase() || '/';
      const r = url.split("/")
      const request = {
        resource: null,
        verb: null
      }
      request.resource = r[1]
      request.verb = r[2]
  
      return request
    }
   
  }
  
  export default RouteSettings;