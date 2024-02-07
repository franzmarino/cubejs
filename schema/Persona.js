cube(`Persona`, {
  data_source: `default`,
  sql: `SELECT * FROM dbo."Persona"`,

  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },

  joins: {

  },

  measures: {

  },

  dimensions: {
    id: {
      sql: `${CUBE}."Id"`,
      type: `number`,
    },

    nrodocumento: {
      sql: `${CUBE}."NroDocumento"`,
      type: `string`
    },

    nombrelegal: {
      sql: `${CUBE}."NombreLegal"`,
      type: `string`
    },

    nombrecomercial: {
      sql: `${CUBE}."NombreComercial"`,
      type: `string`
    },

    nombreparamostrar: {
      sql: `${CUBE}."NombreParaMostrar"`,
      type: `string`
    },

    telefono: {
      sql: `${CUBE}."Telefono"`,
      type: `string`
    },

    correo: {
      sql: `${CUBE}."Correo"`,
      type: `string`
    },

    direccion: {
      sql: `${CUBE}."Direccion"`,
      type: `string`
    },

    escliente: {
      sql: `${CUBE}."EsCliente"`,
      type: `string`
    },

    esproveedor: {
      sql: `${CUBE}."EsProveedor"`,
      type: `string`
    },

    esempleado: {
      sql: `${CUBE}."EsEmpleado"`,
      type: `string`
    },

    estado: {
      sql: `${CUBE}."Estado"`,
      type: `string`
    },

    estadoregistro: {
      sql: `${CUBE}."EstadoRegistro"`,
      type: `string`
    },

    usuariocreacion: {
      sql: `${CUBE}."UsuarioCreacion"`,
      type: `string`
    },

    usuariomodificacion: {
      sql: `${CUBE}."UsuarioModificacion"`,
      type: `string`
    },

    usuariowindows: {
      sql: `${CUBE}."UsuarioWindows"`,
      type: `string`
    },

    equipo: {
      sql: `${CUBE}."Equipo"`,
      type: `string`
    },

    direccionip: {
      sql: `${CUBE}."DireccionIp"`,
      type: `string`
    },

    aplicadsctoconefectivo: {
      sql: `${CUBE}."AplicaDsctoConEfectivo"`,
      type: `string`
    },

    fechanacimiento: {
      sql: `${CUBE}."FechaNacimiento"`,
      type: `time`
    },

    fechacreacion: {
      sql: `${CUBE}."FechaCreacion"`,
      type: `time`
    },

    fechamodificacion: {
      sql: `${CUBE}."FechaModificacion"`,
      type: `time`
    }
  },

  dataSource: `default`
});
