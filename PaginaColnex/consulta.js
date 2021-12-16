var getElementsTargets = "Select Ruta, Titulo, Descripcion from target;";

//Invoke prepared SQL query and return invocation result
function getTargets(fromAccount, toAccount){
	var result = MFP.Server.invokeSQLStatement({
		preparedStatement : getElementsTargets 
	});
    return result
}

function getServicesInfo() {

    services = getTargets();
    a = services.resultSet;
    if (a && a.length>0) {
        b = a[0].services;
    }
}
