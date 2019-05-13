const rango_categoria ={
	"Varios": 4878,
	"Asesoramiento": 2122,
	"Reclamos al taller": 907,
	"Disconformidad con el fabricante": 836,
	"Vehículo entregado en malas condiciones": 236,
	"Lavado": 218,
	"Turnos": 198,
	"VARIOS": 175,
	"Reclamos al Taller": 156,
	"Demoras en la atención": 142,
	"Expectativas altas del cliente": 136,
	"Disconformidad con el Fabricante": 136,
	"Accesorios": 112,
	"Comunicación": 107,
	"Condiciones de atención del personal": 90,
	"Problemas de gestoría": 83,
	"Condiciones generales": 79,
	"Instalaciones": 64,
	"Expectativas Altas del Cliente": 49,
	"Problemas en la entrega": 48,
	"Condiciones Generales": 44,
	"Vehículo Entregado en Malas Condiciones": 44,
	"Demoras en la Atención": 42,
	"Facilidad para comunicarse": 41,
	"Problemas de Gestoría": 27,
	"Elemento de entrega diferenciada": 26,
	"Error de Facturación": 26,
	"Problemas en la Entrega": 20,
	"Condiciones de Atención del Personal": 16,
	"Omisión / error en la información": 16,
	"No tiene": 14,
	"Elemento de Entrega Diferenciada": 13,
	"Facilidad para Comunicarse": 9,
	"Faltante de objetos personales": 8,
	"Condiciones Comerciales": 4,
	"Condiciones de entrega": 3,
	"Repuestos": 3,
	"Explicaciones insuficientes": 2,
	"Nueva consulta y/o Pedido": 2,
	"Incumplimiento de promesas": 2,
	"Experiencia previa negativa": 2,
	"Vehículo Entregado en Malas Condiciones": 1,
	"Expectativas Cliente": 1,
	"Expectativas altas del cliente": 1,
	"Demoras en la atencion": 1,
	"Otros": 1,
	"Atención a clientes": 1
}

const rango_satif_inicial = {
	"9": 3750,
	"10": 3484,
	"8": 1719,
	"7": 805,
	"5": 464,
	"6": 337,
	"1": 244,
	"4": 150,
	"3": 100,
	"2": 90
}

const rango_canal = {
	"PV": 6654,
	"PA": 2830,
	"VN": 1347,
	"Usados": 312
}

const fdp_estado = {
	"REVERTIDO": 0.3337,
	"SIN RESPUESTA": 0.3213,
	"GESTIONADO": 0.1231,
	"NO REVERTIDO": 0.114,
	"EN PROCESO": 0.0378,
	"PENDIENTE": 0.0223,
	"CERRADO POR GERENCIA": 0.0207,
	"REPROGRAMADO": 0.0175,
	"INCONTACTABLE": 0.0094,
	"INFORMATIVA": 0.0001,
	"INFORMATIVO": 0.0001
}

const fdp_canal = {
	"PV": 0.5971,
	"PA": 0.254,
	"VN": 0.1209,
	"Usados": 0.028
}


const fdp_categoria = {
	"Varios": 0.4378,
	"Asesoramiento": 0.1905,
	"Reclamos al taller": 0.0814,
	"Disconformidad con el fabricante": 0.075,
	"Vehículo entregado en malas condiciones": 0.0212,
	"Lavado": 0.0196,
	"Turnos": 0.0178,
	"VARIOS": 0.0157,
	"Reclamos al Taller": 0.014,
	"Demoras en la atención": 0.0127,
	"Expectativas altas del cliente": 0.0122,
	"Disconformidad con el Fabricante": 0.0122,
	"Accesorios": 0.0101,
	"Comunicación": 0.0096,
	"Condiciones de atención del personal": 0.0081,
	"Problemas de gestoría": 0.0074,
	"Condiciones generales": 0.0071,
	"Instalaciones": 0.0057,
	"Expectativas Altas del Cliente": 0.0044,
	"Problemas en la entrega": 0.0043,
	"Condiciones Generales": 0.0039,
	"Vehículo Entregado en Malas Condiciones": 0.0039,
	"Demoras en la Atención": 0.0038,
	"Facilidad para comunicarse": 0.0037,
	"Problemas de Gestoría": 0.0024,
	"Elemento de entrega diferenciada": 0.0023,
	"Error de Facturación": 0.0023,
	"Problemas en la Entrega": 0.0018,
	"Condiciones de Atención del Personal": 0.0014,
	"Omisión / error en la información": 0.0014,
	"No tiene": 0.0013,
	"Elemento de Entrega Diferenciada": 0.0012,
	"Facilidad para Comunicarse": 0.0008,
	"Faltante de objetos personales": 0.0007,
	"Condiciones Comerciales": 0.0004,
	"Condiciones de entrega": 0.0003,
	"Repuestos": 0.0003,
	"Explicaciones insuficientes": 0.0002,
	"Nueva consulta y/o Pedido": 0.0002,
	"Incumplimiento de promesas": 0.0002,
	"Experiencia previa negativa": 0.0002,
	"Vehículo Entregado en Malas Condiciones": 0.0001,
	"Expectativas Cliente": 0.0001,
	"Expectativas altas del cliente": 0.0001,
	"Demoras en la atencion": 0.0001,
	"Otros": 0.0001,
	"Atención a clientes": 0.0001
}


let heatmap_suc_alerta = {
    "baja calificacion": {
        "Sucursal 1": 2524,
        "Sucursal 2": 406,
        "Sucursal 3": 222,
        "Sucursal 4": 28,
        "Sucursal 5": 1
    },
    "baja calificacion e incidente": {
        "Sucursal 1": 373,
        "Sucursal 2": 85,
        "Sucursal 3": 57,
        "Sucursal 4": 14,
        "Sucursal 5": 0
    },
    "baja calificacion y posible retorno": {
        "Sucursal 1": 150,
        "Sucursal 2": 30,
        "Sucursal 3": 21,
        "Sucursal 4": 0,
        "Sucursal 5": 0
    },
    "baja calificacion y retorno": {
        "Sucursal 1": 767,
        "Sucursal 2": 175,
        "Sucursal 3": 63,
        "Sucursal 4": 0,
        "Sucursal 5": 0
    },
    "incidente": {
        "Sucursal 1": 249,
        "Sucursal 2": 72,
        "Sucursal 3": 29,
        "Sucursal 4": 15,
        "Sucursal 5": 0
    },
    "informativa": {
        "Sucursal 1": 210,
        "Sucursal 2": 54,
        "Sucursal 3": 28,
        "Sucursal 4": 7,
        "Sucursal 5": 2
    },
    "observacion": {
        "Sucursal 1": 3999,
        "Sucursal 2": 1055,
        "Sucursal 3": 433,
        "Sucursal 4": 70,
        "Sucursal 5": 2
    },
    "posible retorno": {
        "Sucursal 1": 2,
        "Sucursal 2": 0,
        "Sucursal 3": 0,
        "Sucursal 4": 0,
        "Sucursal 5": 0
    }
}


let alerta_categoria = {
	"Accesorios": {
		"baja calificacion": 13,
		"baja calificacion e incidente": 5,
		"baja calificacion y posible retorno": 0,
		"baja calificacion y retorno": 0,
		"incidente": 25,
		"informativa": 1,
		"observacion": 68,
		"posible retorno": 0
	},
	"Asesoramiento": {
		"baja calificacion": 469,
		"baja calificacion e incidente": 65,
		"baja calificacion y posible retorno": 1,
		"baja calificacion y retorno": 25,
		"incidente": 41,
		"informativa": 127,
		"observacion": 1393,
		"posible retorno": 1
	},
	"Atención a clientes": {
		"baja calificacion": 0,
		"baja calificacion e incidente": 0,
		"baja calificacion y posible retorno": 0,
		"baja calificacion y retorno": 0,
		"incidente": 0,
		"informativa": 0,
		"observacion": 1,
		"posible retorno": 0
	},
	"Comunicación": {
		"baja calificacion": 23,
		"baja calificacion e incidente": 2,
		"baja calificacion y posible retorno": 1,
		"baja calificacion y retorno": 2,
		"incidente": 2,
		"informativa": 1,
		"observacion": 76,
		"posible retorno": 0
	},
	"Condiciones Comerciales": {
		"baja calificacion": 2,
		"baja calificacion e incidente": 0,
		"baja calificacion y posible retorno": 0,
		"baja calificacion y retorno": 0,
		"incidente": 0,
		"informativa": 0,
		"observacion": 2,
		"posible retorno": 0
	},
	"Condiciones Generales": {
		"baja calificacion": 12,
		"baja calificacion e incidente": 0,
		"baja calificacion y posible retorno": 1,
		"baja calificacion y retorno": 0,
		"incidente": 1,
		"informativa": 1,
		"observacion": 29,
		"posible retorno": 0
	},
	"Condiciones de Atención del Personal": {
		"baja calificacion": 5,
		"baja calificacion e incidente": 1,
		"baja calificacion y posible retorno": 0,
		"baja calificacion y retorno": 0,
		"incidente": 0,
		"informativa": 1,
		"observacion": 9,
		"posible retorno": 0
	},
	"Condiciones de atención del personal": {
		"baja calificacion": 23,
		"baja calificacion e incidente": 3,
		"baja calificacion y posible retorno": 0,
		"baja calificacion y retorno": 1,
		"incidente": 1,
		"informativa": 3,
		"observacion": 59,
		"posible retorno": 0
	},
	"Condiciones de entrega": {
		"baja calificacion": 0,
		"baja calificacion e incidente": 0,
		"baja calificacion y posible retorno": 0,
		"baja calificacion y retorno": 0,
		"incidente": 1,
		"informativa": 0,
		"observacion": 2,
		"posible retorno": 0
	},
	"Condiciones generales": {
		"baja calificacion": 24,
		"baja calificacion e incidente": 0,
		"baja calificacion y posible retorno": 0,
		"baja calificacion y retorno": 5,
		"incidente": 1,
		"informativa": 6,
		"observacion": 43,
		"posible retorno": 0
	},
	"Demoras en la Atención": {
		"baja calificacion": 18,
		"baja calificacion e incidente": 0,
		"baja calificacion y posible retorno": 0,
		"baja calificacion y retorno": 0,
		"incidente": 4,
		"informativa": 1,
		"observacion": 19,
		"posible retorno": 0
	},
	"Demoras en la atencion": {
		"baja calificacion": 0,
		"baja calificacion e incidente": 0,
		"baja calificacion y posible retorno": 0,
		"baja calificacion y retorno": 0,
		"incidente": 0,
		"informativa": 0,
		"observacion": 1,
		"posible retorno": 0
	},
	"Demoras en la atención": {
		"baja calificacion": 49,
		"baja calificacion e incidente": 1,
		"baja calificacion y posible retorno": 0,
		"baja calificacion y retorno": 0,
		"incidente": 9,
		"informativa": 4,
		"observacion": 79,
		"posible retorno": 0
	},
	"Disconformidad con el Fabricante": {
		"baja calificacion": 43,
		"baja calificacion e incidente": 2,
		"baja calificacion y posible retorno": 1,
		"baja calificacion y retorno": 9,
		"incidente": 1,
		"informativa": 3,
		"observacion": 77,
		"posible retorno": 0
	},
	"Disconformidad con el fabricante": {
		"baja calificacion": 219,
		"baja calificacion e incidente": 1,
		"baja calificacion y posible retorno": 9,
		"baja calificacion y retorno": 48,
		"incidente": 3,
		"informativa": 39,
		"observacion": 517,
		"posible retorno": 0
	},
	"Elemento de Entrega Diferenciada": {
		"baja calificacion": 0,
		"baja calificacion e incidente": 2,
		"baja calificacion y posible retorno": 0,
		"baja calificacion y retorno": 0,
		"incidente": 0,
		"informativa": 1,
		"observacion": 10,
		"posible retorno": 0
	},
	"Elemento de entrega diferenciada": {
		"baja calificacion": 0,
		"baja calificacion e incidente": 1,
		"baja calificacion y posible retorno": 0,
		"baja calificacion y retorno": 0,
		"incidente": 2,
		"informativa": 0,
		"observacion": 23,
		"posible retorno": 0
	},
	"Error de Facturación": {
		"baja calificacion": 2,
		"baja calificacion e incidente": 1,
		"baja calificacion y posible retorno": 0,
		"baja calificacion y retorno": 1,
		"incidente": 3,
		"informativa": 0,
		"observacion": 19,
		"posible retorno": 0
	},
	"Expectativas Altas del Cliente": {
		"baja calificacion": 45,
		"baja calificacion e incidente": 1,
		"baja calificacion y posible retorno": 0,
		"baja calificacion y retorno": 0,
		"incidente": 1,
		"informativa": 0,
		"observacion": 2,
		"posible retorno": 0
	},
	"Expectativas Cliente": {
		"baja calificacion": 1,
		"baja calificacion e incidente": 0,
		"baja calificacion y posible retorno": 0,
		"baja calificacion y retorno": 0,
		"incidente": 0,
		"informativa": 0,
		"observacion": 0,
		"posible retorno": 0
	},
	"Expectativas altas del cliente": {
		"baja calificacion": 120,
		"baja calificacion e incidente": 5,
		"baja calificacion y posible retorno": 1,
		"baja calificacion y retorno": 4,
		"incidente": 2,
		"informativa": 0,
		"observacion": 4,
		"posible retorno": 0
	},
	"Expectativas altas del cliente\n": {
		"baja calificacion": 1,
		"baja calificacion e incidente": 0,
		"baja calificacion y posible retorno": 0,
		"baja calificacion y retorno": 0,
		"incidente": 0,
		"informativa": 0,
		"observacion": 0,
		"posible retorno": 0
	},
	"Experiencia previa negativa": {
		"baja calificacion": 0,
		"baja calificacion e incidente": 0,
		"baja calificacion y posible retorno": 0,
		"baja calificacion y retorno": 0,
		"incidente": 0,
		"informativa": 1,
		"observacion": 1,
		"posible retorno": 0
	},
	"Explicaciones insuficientes": {
		"baja calificacion": 1,
		"baja calificacion e incidente": 0,
		"baja calificacion y posible retorno": 0,
		"baja calificacion y retorno": 0,
		"incidente": 0,
		"informativa": 0,
		"observacion": 1,
		"posible retorno": 0
	},
	"Facilidad para Comunicarse": {
		"baja calificacion": 3,
		"baja calificacion e incidente": 0,
		"baja calificacion y posible retorno": 0,
		"baja calificacion y retorno": 0,
		"incidente": 0,
		"informativa": 0,
		"observacion": 6,
		"posible retorno": 0
	},
	"Facilidad para comunicarse": {
		"baja calificacion": 11,
		"baja calificacion e incidente": 0,
		"baja calificacion y posible retorno": 0,
		"baja calificacion y retorno": 0,
		"incidente": 0,
		"informativa": 0,
		"observacion": 30,
		"posible retorno": 0
	},
	"Faltante de objetos personales": {
		"baja calificacion": 1,
		"baja calificacion e incidente": 1,
		"baja calificacion y posible retorno": 0,
		"baja calificacion y retorno": 1,
		"incidente": 0,
		"informativa": 0,
		"observacion": 5,
		"posible retorno": 0
	},
	"Incumplimiento de promesas": {
		"baja calificacion": 0,
		"baja calificacion e incidente": 0,
		"baja calificacion y posible retorno": 0,
		"baja calificacion y retorno": 0,
		"incidente": 0,
		"informativa": 2,
		"observacion": 0,
		"posible retorno": 0
	},
	"Instalaciones": {
		"baja calificacion": 12,
		"baja calificacion e incidente": 1,
		"baja calificacion y posible retorno": 0,
		"baja calificacion y retorno": 0,
		"incidente": 1,
		"informativa": 6,
		"observacion": 44,
		"posible retorno": 0
	},
	"Lavado": {
		"baja calificacion": 32,
		"baja calificacion e incidente": 0,
		"baja calificacion y posible retorno": 0,
		"baja calificacion y retorno": 0,
		"incidente": 0,
		"informativa": 16,
		"observacion": 170,
		"posible retorno": 0
	},
	"No tiene": {
		"baja calificacion": 3,
		"baja calificacion e incidente": 0,
		"baja calificacion y posible retorno": 0,
		"baja calificacion y retorno": 0,
		"incidente": 0,
		"informativa": 0,
		"observacion": 11,
		"posible retorno": 0
	},
	"Nueva consulta y/o Pedido": {
		"baja calificacion": 0,
		"baja calificacion e incidente": 0,
		"baja calificacion y posible retorno": 0,
		"baja calificacion y retorno": 0,
		"incidente": 0,
		"informativa": 0,
		"observacion": 2,
		"posible retorno": 0
	},
	"Omisión / error en la información": {
		"baja calificacion": 0,
		"baja calificacion e incidente": 0,
		"baja calificacion y posible retorno": 0,
		"baja calificacion y retorno": 0,
		"incidente": 0,
		"informativa": 12,
		"observacion": 4,
		"posible retorno": 0
	},
	"Otros": {
		"baja calificacion": 0,
		"baja calificacion e incidente": 0,
		"baja calificacion y posible retorno": 0,
		"baja calificacion y retorno": 0,
		"incidente": 0,
		"informativa": 0,
		"observacion": 1,
		"posible retorno": 0
	},
	"Problemas de Gestoría": {
		"baja calificacion": 3,
		"baja calificacion e incidente": 3,
		"baja calificacion y posible retorno": 0,
		"baja calificacion y retorno": 0,
		"incidente": 3,
		"informativa": 1,
		"observacion": 17,
		"posible retorno": 0
	},
	"Problemas de gestoría": {
		"baja calificacion": 13,
		"baja calificacion e incidente": 1,
		"baja calificacion y posible retorno": 0,
		"baja calificacion y retorno": 0,
		"incidente": 5,
		"informativa": 1,
		"observacion": 63,
		"posible retorno": 0
	},
	"Problemas en la Entrega": {
		"baja calificacion": 3,
		"baja calificacion e incidente": 2,
		"baja calificacion y posible retorno": 1,
		"baja calificacion y retorno": 0,
		"incidente": 1,
		"informativa": 0,
		"observacion": 13,
		"posible retorno": 0
	},
	"Problemas en la entrega": {
		"baja calificacion": 2,
		"baja calificacion e incidente": 2,
		"baja calificacion y posible retorno": 0,
		"baja calificacion y retorno": 1,
		"incidente": 12,
		"informativa": 4,
		"observacion": 27,
		"posible retorno": 0
	},
	"Reclamos al Taller": {
		"baja calificacion": 38,
		"baja calificacion e incidente": 0,
		"baja calificacion y posible retorno": 2,
		"baja calificacion y retorno": 39,
		"incidente": 0,
		"informativa": 0,
		"observacion": 77,
		"posible retorno": 0
	},
	"Reclamos al taller": {
		"baja calificacion": 188,
		"baja calificacion e incidente": 0,
		"baja calificacion y posible retorno": 28,
		"baja calificacion y retorno": 263,
		"incidente": 0,
		"informativa": 7,
		"observacion": 421,
		"posible retorno": 0
	},
	"Repuestos": {
		"baja calificacion": 0,
		"baja calificacion e incidente": 0,
		"baja calificacion y posible retorno": 0,
		"baja calificacion y retorno": 0,
		"incidente": 0,
		"informativa": 1,
		"observacion": 2,
		"posible retorno": 0
	},
	"Turnos": {
		"baja calificacion": 14,
		"baja calificacion e incidente": 0,
		"baja calificacion y posible retorno": 0,
		"baja calificacion y retorno": 3,
		"incidente": 1,
		"informativa": 4,
		"observacion": 176,
		"posible retorno": 0
	},
	"VARIOS": {
		"baja calificacion": 52,
		"baja calificacion e incidente": 20,
		"baja calificacion y posible retorno": 7,
		"baja calificacion y retorno": 22,
		"incidente": 10,
		"informativa": 0,
		"observacion": 64,
		"posible retorno": 0
	},
	"Varios": {
		"baja calificacion": 1727,
		"baja calificacion e incidente": 396,
		"baja calificacion y posible retorno": 149,
		"baja calificacion y retorno": 581,
		"incidente": 174,
		"informativa": 58,
		"observacion": 1792,
		"posible retorno": 1
	},
	"Vehículo Entregado en Malas Condiciones": {
		"baja calificacion": 2,
		"baja calificacion e incidente": 2,
		"baja calificacion y posible retorno": 0,
		"baja calificacion y retorno": 0,
		"incidente": 9,
		"informativa": 0,
		"observacion": 31,
		"posible retorno": 0
	},
	"Vehículo Entregado en Malas Condiciones\n": {
		"baja calificacion": 0,
		"baja calificacion e incidente": 0,
		"baja calificacion y posible retorno": 0,
		"baja calificacion y retorno": 0,
		"incidente": 0,
		"informativa": 0,
		"observacion": 1,
		"posible retorno": 0
	},
	"Vehículo entregado en malas condiciones": {
		"baja calificacion": 7,
		"baja calificacion e incidente": 11,
		"baja calificacion y posible retorno": 0,
		"baja calificacion y retorno": 0,
		"incidente": 52,
		"informativa": 0,
		"observacion": 166,
		"posible retorno": 0
	}
}