import { Project } from '../models/project.model';

const BASE = 'projects/mrlucho/';

export const PROJECTS: Project[] = [
  {
    title: 'plataforma de pedidos para un restaurante',
        description:
      'Plataforma web para que los clientes de un restaurante hagan sus pedidos a domicilio en línea, sin depender de conversaciones por WhatsApp. El cliente elige sus productos, paga y sigue el estado de su pedido; el restaurante lo gestiona desde un panel con roles (dueño, mesera y domiciliario), toma de pedidos en el local, reservas y estadísticas.',
    technologies: ['Angular', 'TypeScript', 'Django', 'Django REST Framework', 'PostgreSQL'],
    features: [
      'Catálogo, carrito y confirmación de pedido para el cliente',
      'Pago en efectivo, Nequi o Bancolombia con carga de comprobante',
      'Seguimiento del pedido en cada estado e historial del cliente',
      'Panel con roles: dueño, mesera y domiciliario, con gestión de equipo',
      'Pedidos a domicilio y en el local (salón, terraza y para llevar)',
      'Estadísticas de ventas, horas pico y productos más vendidos',
    ],
    admin: [
      {
        src: BASE + 'mrlucho-admin-inicio.webp',
        alt: 'Inicio del panel con pedidos del día y gráfica de la semana',
        caption: 'Inicio',
      },
      {
        src: BASE + 'mrlucho-admin-pedidos.webp',
        alt: 'Pedidos a domicilio con estado y detalle de pago',
        caption: 'Pedidos a domicilio',
      },
      {
        src: BASE + 'mrlucho-admin-tomar-pedido.webp',
        alt: 'Toma de pedidos en el local: ubicación y mesa',
        caption: 'Tomar pedido',
      },
      {
        src: BASE + 'mrlucho-admin-reservas.webp',
        alt: 'Formulario y listado de reservas',
        caption: 'Reservas',
      },
      {
        src: BASE + 'mrlucho-admin-estadisticas.webp',
        alt: 'Estadísticas de ventas, pedidos entregados y ticket promedio',
        caption: 'Estadísticas',
      },
      {
        src: BASE + 'mrlucho-admin-equipo.webp',
        alt: 'Gestión del equipo con roles de dueño, mesera y domicilios',
        caption: 'Equipo y roles',
      },
    ],
    client: [
      {
        src: BASE + 'mrlucho-cliente-menu.webp',
        alt: 'Menú del restaurante con categorías y productos',
        caption: 'Menú',
      },
      {
        src: BASE + 'mrlucho-cliente-confirmar.webp',
        alt: 'Confirmación del pedido con método de pago y comprobante',
        caption: 'Confirmar pedido',
      },
      {
        src: BASE + 'mrlucho-cliente-estado.webp',
        alt: 'Seguimiento del estado del pedido',
        caption: 'Seguimiento',
      },
    ],
  },
];
