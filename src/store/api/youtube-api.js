/*
  Util - Youtube API boilerplate code
 */

export function buildApiRequest(requestMethod, path, params, properties) {
  params = removeEmptyParams(params);
  let request;
  if (properties) {
    let resource = createResource(properties);
    request = window.gapi.client.request({
      body: resource,
      method: requestMethod,
      path: path,
      params: params
    });
  } else {
    request = window.gapi.client.request({
      method: requestMethod,
      path: path,
      params: params
    });
  }
  return request;
}

function removeEmptyParams(params) {
  for (var p in params) {
    if (!params[p] || params[p] === "undefined") {
      delete params[p];
    }
  }
  return params;
}

function createResource(properties) {
  var resource = {};
  var normalizedProps = properties;
  for (var p in properties) {
    var value = properties[p];
    if (p && p.substr(-2, 2) === "[]") {
      var adjustedName = p.replace("[]", "");
      if (value) {
        normalizedProps[adjustedName] = value.split(",");
      }
      delete normalizedProps[p];
    }
  }
  for (var prop in normalizedProps) {
    // Leave properties that don't have values out of inserted resource.
    if (normalizedProps.hasOwnProperty(prop) && normalizedProps[prop]) {
      var propArray = prop.split(".");
      var ref = resource;
      for (var pa = 0; pa < propArray.length; pa++) {
        var key = propArray[pa];
        if (pa === propArray.length - 1) {
          ref[key] = normalizedProps[prop];
        } else {
          ref = ref[key] = ref[key] || {};
        }
      }
    }
  }
  return resource;
}
