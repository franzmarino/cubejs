cube(`VentaLocacion`, {
    data_source: `default`,
    sql: `select t.NombreCorto Tienda,v.Credito,v.FechaEmision,v.Total,v.Id from Venta v
    inner join Tienda t on t.Id=v.TiendaId
    where v.Estado in ('X','C')
    and v.TipoDocumento in ('03','01')
    and v.Total >0
    AND V.CuadreCajaId IS NOT NULL
    AND V.SerieCorrelativo IS NOT NULL
    and V.EstadoRegistro = 1`,

    preAggregations: {
        // Pre-Aggregations definitions go here
        // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
    },

    joins: {

    },

    measures: {
        count: {
            type: `count`,
            drillMembers: [id]
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

        tienda: {
            sql: `${CUBE}."Tienda"`,
            type: `string`
        },
        credito: {
            sql: `${CUBE}."Credito"`,
            type: `string`
        },
        fechaemision: {
            sql: `${CUBE}."FechaEmision"`,
            type: `time`
        }
    },

    dataSource: `default`
});