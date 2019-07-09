const express = require('express');
const path = require('path');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// mysql

var myConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'datoslitt',
    multipleStatements: true
});

app.get('/api/primax', (req, res) => {
    myConnection.query('SELECT c.nombre as Cliente, COUNT(*) as Total\
    from asignado asi\
    INNER JOIN persona pe on asi.idPersona = pe.idPersona\
    INNER JOIN detalle_requerimiento dr on asi.idDetalle_requerimiento = dr.idDetalle_requerimiento\
    INNER JOIN estacion e on dr.idEstacion = e.idEstacion\
    INNER JOIN cliente c on e.idCliente = c.idCliente\
    GROUP BY c.idCliente', (err, rows, fields) => {
            if (!err)
                res.send(rows);
            else
                console.log(err);
        })
})


app.get('/api/departamento', (req, res) => {

    myConnection.query('SELECT de.nombre as Departamento, COUNT(*) as Total\
    FROM asignado a\
    INNER JOIN detalle_requerimiento d on a.idDetalle_requerimiento = d.idDetalle_requerimiento\
    INNER JOIN requerimiento r on d.idRequerimiento = r.idRequerimiento\
    INNER JOIN estacion e on d.idEstacion = e.idEstacion\
    INNER JOIN departamento de on e.idDepartamento = de.idDepartamento\
    WHERE YEAR(r.fechaAlta) = 2018\
    group by de.idDepartamento\
    order by total DESC ', (err, rows, fields) => {
            if (!err)
                res.send(rows);
            else
                console.log(err);
        })


})

app.get('/api/departamento2', (req, res) => {

    myConnection.query('SELECT de.nombre as Departamentos, COUNT(*) as Totales\
    FROM asignado a\
    INNER JOIN detalle_requerimiento d on a.idDetalle_requerimiento = d.idDetalle_requerimiento\
    INNER JOIN requerimiento r on d.idRequerimiento = r.idRequerimiento\
    INNER JOIN estacion e on d.idEstacion = e.idEstacion\
    INNER JOIN departamento de on e.idDepartamento = de.idDepartamento\
    WHERE YEAR(r.fechaAlta) = 2019\
    group by de.idDepartamento\
    order by Totales DESC ', (err, rows, fields) => {
            if (!err)
                res.send(rows);
            else
                console.log(err);
        })


})

app.get('/api/spp', (req, res) => {

    myConnection.query('SELECT spp.nombre as Seguro, COUNT(spp.idSpp) AS Totales\
    FROM persona\
    INNER JOIN spp on persona.idSpp = spp.idSpp\
    WHERE persona.idSpp in (3,4,9,10)\
    AND year(FechaDeRegistro) = 2018\
    GROUP BY spp.idSpp \
    ORDER BY Totales ASC', (err, rows, fields) => {
            if (!err)
                res.send(rows);
            else
                console.log(err);
        })


})


app.get('/api/spp2', (req, res) => {

    myConnection.query('SELECT spp.nombre as Seguro1, COUNT(spp.idSpp) AS Totales1\
    FROM persona\
    INNER JOIN spp on persona.idSpp = spp.idSpp\
    WHERE persona.idSpp in (3,4,9,10)\
    AND year(FechaDeRegistro) = 2019\
    GROUP BY spp.idSpp\
    ORDER BY Totales1 ASC', (err, rows, fields) => {
            if (!err)
                res.send(rows);
            else
                console.log(err);
        })


})



app.get('/api/genero', (req, res) => {
    myConnection.query('SELECT g.nombre as Genero, COUNT(*) as Total\
    FROM asignado a\
    INNER JOIN persona p on a.idPersona = p.idPersona\
    INNER JOIN genero g on p.idgenero = g.idgenero\
    INNER JOIN detalle_requerimiento dr on a.idDetalle_requerimiento = dr.idDetalle_requerimiento\
    INNER JOIN estacion e on dr.idEstacion = e.idEstacion\
    INNER JOIN cliente c on e.idCliente = c.idCliente\
    group by p.idgenero', (err, rows, fields) => {
            if (!err)
                res.send(rows);
            else
                console.log(err);
        })
})

app.get('/api/educacion201809', (req, res) => {
    myConnection.query('SELECT n.nombre as Educacion2018, COUNT(*) as Total2018\
    FROM asignado asi\
    INNER JOIN persona p on asi.idPersona = p.idPersona\
    INNER JOIN niveleducativo n on p.idNivelEducativo = n.idNivelEducativo\
	INNER JOIN detalle_requerimiento dr on asi.idDetalle_requerimiento = dr.idDetalle_requerimiento\
	INNER JOIN requerimiento r on dr.idRequerimiento = r.idRequerimiento\
	INNER JOIN turno t on p.idTurno = t.idTurno\
	INNER JOIN usuario u on p.idUsuario = u.idUsuario\
	WHERE YEAR(r.fechaAlta) = 2018 AND month(r.fechaAlta) = 09\
    group by p.idNivelEducativo\
    order by Total2018 DESC', (err, rows, fields) => {


            if (!err)
                res.send(rows);
            else
                console.log(err);
        })
})
app.get('/api/educacion201810', (req, res) => {
    myConnection.query('SELECT n.nombre as Educacion2018, COUNT(*) as Total2018\
    FROM asignado asi\
    INNER JOIN persona p on asi.idPersona = p.idPersona\
    INNER JOIN niveleducativo n on p.idNivelEducativo = n.idNivelEducativo\
	INNER JOIN detalle_requerimiento dr on asi.idDetalle_requerimiento = dr.idDetalle_requerimiento\
	INNER JOIN requerimiento r on dr.idRequerimiento = r.idRequerimiento\
	INNER JOIN turno t on p.idTurno = t.idTurno\
	INNER JOIN usuario u on p.idUsuario = u.idUsuario\
	WHERE YEAR(r.fechaAlta) = 2018 AND month(r.fechaAlta) = 10\
    group by p.idNivelEducativo\
    order by Total2018 DESC', (err, rows, fields) => {


            if (!err)
                res.send(rows);
            else
                console.log(err);
        })
})
app.get('/api/educacion201811', (req, res) => {
    myConnection.query('SELECT n.nombre as Educacion2018, COUNT(*) as Total2018\
    FROM asignado asi\
    INNER JOIN persona p on asi.idPersona = p.idPersona\
    INNER JOIN niveleducativo n on p.idNivelEducativo = n.idNivelEducativo\
	INNER JOIN detalle_requerimiento dr on asi.idDetalle_requerimiento = dr.idDetalle_requerimiento\
	INNER JOIN requerimiento r on dr.idRequerimiento = r.idRequerimiento\
	INNER JOIN turno t on p.idTurno = t.idTurno\
	INNER JOIN usuario u on p.idUsuario = u.idUsuario\
	WHERE YEAR(r.fechaAlta) = 2018 AND month(r.fechaAlta) = 11\
    group by p.idNivelEducativo\
    order by Total2018 DESC', (err, rows, fields) => {


            if (!err)
                res.send(rows);
            else
                console.log(err);
        })
})
app.get('/api/educacion201812', (req, res) => {
    myConnection.query('SELECT n.nombre as Educacion2018, COUNT(*) as Total2018\
    FROM asignado asi\
    INNER JOIN persona p on asi.idPersona = p.idPersona\
    INNER JOIN niveleducativo n on p.idNivelEducativo = n.idNivelEducativo\
	INNER JOIN detalle_requerimiento dr on asi.idDetalle_requerimiento = dr.idDetalle_requerimiento\
	INNER JOIN requerimiento r on dr.idRequerimiento = r.idRequerimiento\
	INNER JOIN turno t on p.idTurno = t.idTurno\
	INNER JOIN usuario u on p.idUsuario = u.idUsuario\
	WHERE YEAR(r.fechaAlta) = 2018 AND month(r.fechaAlta) = 12\
    group by p.idNivelEducativo\
    order by Total2018 DESC', (err, rows, fields) => {


            if (!err)
                res.send(rows);
            else
                console.log(err);
        })
})
app.get('/api/educacion201901', (req, res) => {
    myConnection.query('SELECT n.nombre as Educacion2019, COUNT(*) as Total2019\
    FROM asignado asi\
    INNER JOIN persona p on asi.idPersona = p.idPersona\
    INNER JOIN niveleducativo n on p.idNivelEducativo = n.idNivelEducativo\
	INNER JOIN detalle_requerimiento dr on asi.idDetalle_requerimiento = dr.idDetalle_requerimiento\
	INNER JOIN requerimiento r on dr.idRequerimiento = r.idRequerimiento\
	INNER JOIN turno t on p.idTurno = t.idTurno\
	INNER JOIN usuario u on p.idUsuario = u.idUsuario\
	WHERE YEAR(r.fechaAlta) = 2019 AND month(r.fechaAlta) = 01\
    group by p.idNivelEducativo\
    order by Total2019 DESC', (err, rows, fields) => {


            if (!err)
                res.send(rows);
            else
                console.log(err);
        })
})
app.get('/api/educacion201902', (req, res) => {
    myConnection.query('SELECT n.nombre as Educacion2019, COUNT(*) as Total2019\
    FROM asignado asi\
    INNER JOIN persona p on asi.idPersona = p.idPersona\
    INNER JOIN niveleducativo n on p.idNivelEducativo = n.idNivelEducativo\
	INNER JOIN detalle_requerimiento dr on asi.idDetalle_requerimiento = dr.idDetalle_requerimiento\
	INNER JOIN requerimiento r on dr.idRequerimiento = r.idRequerimiento\
	INNER JOIN turno t on p.idTurno = t.idTurno\
	INNER JOIN usuario u on p.idUsuario = u.idUsuario\
	WHERE YEAR(r.fechaAlta) = 2019 AND month(r.fechaAlta) = 02\
    group by p.idNivelEducativo\
    order by Total2019 DESC', (err, rows, fields) => {


            if (!err)
                res.send(rows);
            else
                console.log(err);
        })
})
app.get('/api/educacion201903', (req, res) => {
    myConnection.query('SELECT n.nombre as Educacion2019, COUNT(*) as Total2019\
    FROM asignado asi\
    INNER JOIN persona p on asi.idPersona = p.idPersona\
    INNER JOIN niveleducativo n on p.idNivelEducativo = n.idNivelEducativo\
	INNER JOIN detalle_requerimiento dr on asi.idDetalle_requerimiento = dr.idDetalle_requerimiento\
	INNER JOIN requerimiento r on dr.idRequerimiento = r.idRequerimiento\
	INNER JOIN turno t on p.idTurno = t.idTurno\
	INNER JOIN usuario u on p.idUsuario = u.idUsuario\
	WHERE YEAR(r.fechaAlta) = 2019 AND month(r.fechaAlta) = 03\
    group by p.idNivelEducativo\
    order by Total2019 DESC', (err, rows, fields) => {


            if (!err)
                res.send(rows);
            else
                console.log(err);
        })
})

app.get('/api/turno2018', (req, res) => {
    myConnection.query('SELECT t.nombre as Turno , COUNT(t.idTurno) Cantidad\
    from asignado asi\
    INNER JOIN persona pe on asi.idPersona = pe.idPersona\
    INNER JOIN detalle_requerimiento dr on asi.idDetalle_requerimiento = dr.idDetalle_requerimiento\
    INNER JOIN requerimiento r on dr.idRequerimiento = r.idRequerimiento\
    INNER JOIN estacion e on dr.idEstacion = e.idEstacion\
    INNER JOIN cliente c on e.idCliente = c.idCliente\
    INNER JOIN turno t on pe.idTurno = t.idTurno\
	WHERE YEAR(r.fechaAlta) = 2018\
    GROUP BY t.idTurno', (err, rows, fields) => {
            if (!err)
                res.send(rows);
            else
                console.log(err);
        })
})
app.get('/api/turno2019', (req, res) => {
    myConnection.query('SELECT t.nombre as Turno , COUNT(t.idTurno) Cantidad\
    from asignado asi\
    INNER JOIN persona pe on asi.idPersona = pe.idPersona\
    INNER JOIN detalle_requerimiento dr on asi.idDetalle_requerimiento = dr.idDetalle_requerimiento\
    INNER JOIN requerimiento r on dr.idRequerimiento = r.idRequerimiento\
    INNER JOIN estacion e on dr.idEstacion = e.idEstacion\
    INNER JOIN cliente c on e.idCliente = c.idCliente\
    INNER JOIN turno t on pe.idTurno = t.idTurno\
	WHERE YEAR(r.fechaAlta) = 2019\
    GROUP BY t.idTurno', (err, rows, fields) => {
            if (!err)
                res.send(rows);
            else
                console.log(err);
        })
})
app.get('/api/usuariosTotal', (req, res) => {
    myConnection.query('SELECT u.nombres as Nombres, count(u.idUsuario) as Total \
    from usuario u \
    inner join persona p on u.idUsuario = p.idUsuario\
    group by u.idUsuario\
    order by total  DESC\
    LIMIT 10', (err, rows, fields) => {
            if (!err)
                res.send(rows);
            else
                console.log(err);
        })
})

app.get('/api/masculino', (req, res) => {
    myConnection.query('SELECT c.nombre as Cliente, COUNT(*) as Total\
    FROM asignado a\
    INNER JOIN persona p on a.idPersona = p.idPersona\
    INNER JOIN genero g on p.idgenero = g.idgenero\
	INNER JOIN detalle_requerimiento dr on a.idDetalle_requerimiento = dr.idDetalle_requerimiento\
    INNER JOIN estacion e on dr.idEstacion = e.idEstacion\
    INNER JOIN cliente c on e.idCliente = c.idCliente\
    WHERE p.idGenero = 1\
    group by c.idCliente', (err, rows, fields) => {
            if (!err)
                res.send(rows);
            else
                console.log(err);
        })
})
app.get('/api/femenino', (req, res) => {
    myConnection.query('SELECT c.nombre as Cliente, COUNT(*) as Total\
    FROM asignado a\
    INNER JOIN persona p on a.idPersona = p.idPersona\
    INNER JOIN genero g on p.idgenero = g.idgenero\
	INNER JOIN detalle_requerimiento dr on a.idDetalle_requerimiento = dr.idDetalle_requerimiento\
    INNER JOIN estacion e on dr.idEstacion = e.idEstacion\
    INNER JOIN cliente c on e.idCliente = c.idCliente\
    WHERE p.idGenero = 2\
    group by c.idCliente', (err, rows, fields) => {
            if (!err)
                res.send(rows);
            else
                console.log(err);
        })
})

app.get('/api/usuarios201809', (req, res) => {
    myConnection.query('SELECT u.nombres as Nombres2018, count(u.idUsuario) as Total2018\
    from asignado asi\
     INNER JOIN persona pe on asi.idPersona = pe.idPersona\
     INNER JOIN detalle_requerimiento dr on asi.idDetalle_requerimiento = dr.idDetalle_requerimiento\
     INNER JOIN requerimiento r on dr.idRequerimiento = r.idRequerimiento\
     INNER JOIN turno t on pe.idTurno = t.idTurno\
     INNER JOIN usuario u on pe.idUsuario = u.idUsuario\
     WHERE YEAR(r.fechaAlta) = 2018 AND month(r.fechaAlta) = 09\
     group by u.idUsuario\
     order by Total2018  DESC\
     LIMIT 10;', (err, rows, fields) => {
            if (!err)
                res.send(rows);
            else
                console.log(err);
        })
})
app.get('/api/usuarios201810', (req, res) => {
    myConnection.query('SELECT u.nombres as Nombres2018, count(u.idUsuario) as Total2018\
    from asignado asi\
     INNER JOIN persona pe on asi.idPersona = pe.idPersona\
     INNER JOIN detalle_requerimiento dr on asi.idDetalle_requerimiento = dr.idDetalle_requerimiento\
     INNER JOIN requerimiento r on dr.idRequerimiento = r.idRequerimiento\
     INNER JOIN turno t on pe.idTurno = t.idTurno\
     INNER JOIN usuario u on pe.idUsuario = u.idUsuario\
     WHERE YEAR(r.fechaAlta) = 2018 AND month(r.fechaAlta) = 10\
     group by u.idUsuario\
     order by Total2018  DESC\
     LIMIT 10;', (err, rows, fields) => {
            if (!err)
                res.send(rows);
            else
                console.log(err);
        })
})
app.get('/api/usuarios201811', (req, res) => {
    myConnection.query('SELECT u.nombres as Nombres2018, count(u.idUsuario) as Total2018\
    from asignado asi\
     INNER JOIN persona pe on asi.idPersona = pe.idPersona\
     INNER JOIN detalle_requerimiento dr on asi.idDetalle_requerimiento = dr.idDetalle_requerimiento\
     INNER JOIN requerimiento r on dr.idRequerimiento = r.idRequerimiento\
     INNER JOIN turno t on pe.idTurno = t.idTurno\
     INNER JOIN usuario u on pe.idUsuario = u.idUsuario\
     WHERE YEAR(r.fechaAlta) = 2018 AND month(r.fechaAlta) = 11\
     group by u.idUsuario\
     order by Total2018  DESC\
     LIMIT 10;', (err, rows, fields) => {
            if (!err)
                res.send(rows);
            else
                console.log(err);
        })
})
app.get('/api/usuarios201812', (req, res) => {
    myConnection.query('SELECT u.nombres as Nombres2018, count(u.idUsuario) as Total2018\
    from asignado asi\
     INNER JOIN persona pe on asi.idPersona = pe.idPersona\
     INNER JOIN detalle_requerimiento dr on asi.idDetalle_requerimiento = dr.idDetalle_requerimiento\
     INNER JOIN requerimiento r on dr.idRequerimiento = r.idRequerimiento\
     INNER JOIN turno t on pe.idTurno = t.idTurno\
     INNER JOIN usuario u on pe.idUsuario = u.idUsuario\
     WHERE YEAR(r.fechaAlta) = 2018 AND month(r.fechaAlta) = 12\
     group by u.idUsuario\
     order by Total2018  DESC\
     LIMIT 10;', (err, rows, fields) => {
            if (!err)
                res.send(rows);
            else
                console.log(err);
        })
})
app.get('/api/usuarios201901', (req, res) => {
    myConnection.query('SELECT u.nombres as Nombres2019, count(u.idUsuario) as Total2019\
    from asignado asi\
     INNER JOIN persona pe on asi.idPersona = pe.idPersona\
     INNER JOIN detalle_requerimiento dr on asi.idDetalle_requerimiento = dr.idDetalle_requerimiento\
     INNER JOIN requerimiento r on dr.idRequerimiento = r.idRequerimiento\
     INNER JOIN turno t on pe.idTurno = t.idTurno\
     INNER JOIN usuario u on pe.idUsuario = u.idUsuario\
     WHERE YEAR(r.fechaAlta) = 2019 AND month(r.fechaAlta) = 01\
     group by u.idUsuario\
     order by Total2019  DESC\
     LIMIT 10;', (err, rows, fields) => {
            if (!err)
                res.send(rows);
            else
                console.log(err);
        })
})
app.get('/api/usuarios201902', (req, res) => {
    myConnection.query('SELECT u.nombres as Nombres2019, count(u.idUsuario) as Total2019\
    from asignado asi\
     INNER JOIN persona pe on asi.idPersona = pe.idPersona\
     INNER JOIN detalle_requerimiento dr on asi.idDetalle_requerimiento = dr.idDetalle_requerimiento\
     INNER JOIN requerimiento r on dr.idRequerimiento = r.idRequerimiento\
     INNER JOIN turno t on pe.idTurno = t.idTurno\
     INNER JOIN usuario u on pe.idUsuario = u.idUsuario\
     WHERE YEAR(r.fechaAlta) = 2019 AND month(r.fechaAlta) = 02\
     group by u.idUsuario\
     order by Total2019  DESC\
     LIMIT 10;', (err, rows, fields) => {
            if (!err)
                res.send(rows);
            else
                console.log(err);
        })
})
app.get('/api/usuarios201903', (req, res) => {
    myConnection.query('SELECT u.nombres as Nombres2019, count(u.idUsuario) as Total2019\
    from asignado asi\
     INNER JOIN persona pe on asi.idPersona = pe.idPersona\
     INNER JOIN detalle_requerimiento dr on asi.idDetalle_requerimiento = dr.idDetalle_requerimiento\
     INNER JOIN requerimiento r on dr.idRequerimiento = r.idRequerimiento\
     INNER JOIN turno t on pe.idTurno = t.idTurno\
     INNER JOIN usuario u on pe.idUsuario = u.idUsuario\
     WHERE YEAR(r.fechaAlta) = 2019 AND month(r.fechaAlta) = 03\
     group by u.idUsuario\
     order by Total2019  DESC\
     LIMIT 10;', (err, rows, fields) => {
            if (!err)
                res.send(rows);
            else
                console.log(err);
        })
})
app.get('/api/usuario', (req, res) => {
    myConnection.query('SELECT nombres,correo,cargo,idDistrito\
    FROM usuario;', (err, rows, fields) => {
            if (!err)
                res.send(rows);
            else
                console.log(err);
        })
})

app.post('/api/login', (req, res) => {
    var id = req.body.id;
    var password = req.body.password;
    var sql ="SELECT count(*) as existe, nombres \
    FROM usuario\
    WHERE clave = ?\
    AND correo = ?" ;
    myConnection.query(sql, [password, id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})

// An api endpoint that returns a short list of items
app.get('/api/getList', (req, res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/src/pages/Card'));
});

const port = process.env.PORT || 4000;
app.listen(port);

console.log('App is listening on port ' + port);