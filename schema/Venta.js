cube(`Venta`, {
  data_source: `default`,
  sql: `SELECT * FROM dbo."Venta"`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, idusuario]
    },
    
    subtotal: {
      sql: `${CUBE}."SubTotal"`,
      type: `sum`
    },
    
    total: {
      sql: `${CUBE}."Total"`,
      type: `sum`
    }
  },
  
  dimensions: {
    id: {
      sql: `${CUBE}."Id"`,
      type: `number`,
      primaryKey: true
    },
    
    glosa: {
      sql: `${CUBE}."Glosa"`,
      type: `string`
    },
    
    estado: {
      sql: `${CUBE}."Estado"`,
      type: `string`
    },
    
    credito: {
      sql: `${CUBE}."Credito"`,
      type: `string`
    },
    
    ventacosto: {
      sql: `${CUBE}."VentaCosto"`,
      type: `string`
    },
    
    ventapormayor: {
      sql: `${CUBE}."VentaPorMayor"`,
      type: `string`
    },
    
    tipodocumento: {
      sql: `${CUBE}."TipoDocumento"`,
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
    
    idusuario: {
      sql: `${CUBE}."IdUsuario"`,
      type: `string`
    },
    
    serie: {
      sql: `${CUBE}."Serie"`,
      type: `string`
    },
    
    seriecorrelativo: {
      sql: `${CUBE}."SerieCorrelativo"`,
      type: `string`
    },
    
    glosaadicional: {
      sql: `${CUBE}."GlosaAdicional"`,
      type: `string`
    },
    
    fechaemision: {
      sql: `${CUBE}."FechaEmision"`,
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
