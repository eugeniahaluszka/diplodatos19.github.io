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
