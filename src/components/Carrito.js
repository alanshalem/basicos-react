import React from 'react';

import Producto from './Producto';
import './carrito.css';

const Carrito = ({ carrito, agregarProducto }) => (
	<div className="carrito">
		<h1>Tu carrito de compras</h1>
		{carrito.length === 0 ? (
			<h2>No hay productos en el carrito</h2>
		) : (
			carrito.map((producto) => (
				<Producto
					key={producto.id}
					producto={producto}
					carrito={carrito}
					agregarProducto={agregarProducto}
				/>
			))
		)}
	</div>
);
export default Carrito;
