¡Excelente, Jonatan! Aquí tienes la consigna formal lista para entregarle a tu alumno. Está redactada de manera profesional, como si fuera un pedido de un cliente real (un "Challenge Técnico"), lo cual motiva mucho más a los estudiantes de nivel medio.

🚀 Challenge: FinanzaPro - Billetera Virtual
📝 Contexto
Has sido contratado por la FinTech FinanzaPro para desarrollar el Producto Mínimo Viable (MVP) de su nueva billetera virtual. El objetivo es que los usuarios puedan gestionar su dinero, realizar transferencias y mantener un registro histórico de sus movimientos.

🎯 Objetivos de la Aplicación
1. Gestión de Saldo
La aplicación debe iniciar con un saldo predeterminado (ej: $5,000).

El saldo debe actualizarse automáticamente cada vez que se realice una transferencia exitosa.

Persistencia: Si el usuario recarga la página, el saldo y el historial no deben borrarse (utilizar localStorage).

2. Realizar Transferencias
Debe existir un formulario con dos campos: Destinatario y Monto.

Al presionar "Confirmar Envío", la aplicación debe simular una conexión con el banco.

Simulación de Backend: El proceso debe tardar 2 segundos en completarse, mostrando un indicador de carga (spinner o texto de "Procesando...") durante ese tiempo.

3. Validaciones de Seguridad
No se debe permitir la transferencia si:

El monto es menor o igual a 0.

El monto es mayor al saldo disponible.

El campo del destinatario está vacío.

4. Historial de Movimientos (Bitácora)
Cada transferencia exitosa debe guardarse como un objeto dentro de un array.

El historial debe mostrar: Nombre del destinatario, monto descontado y la fecha/hora exacta del movimiento.

Los nuevos movimientos deben aparecer en la parte superior de la lista


Capa,Requisito
HTML,"Uso de etiquetas semánticas (header, section, article, ul)."
CSS,Diseño moderno y limpio. Uso de Flexbox para centrar el dashboard y Position: fixed/absolute para el loader de carga.
JavaScript,Uso de funciones asíncronas (async/await) y promesas para la simulación del banco.
Lógica,Manipulación de Arrays (métodos como .push() y el uso de Spread Operator [...]).