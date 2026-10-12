import { Project } from '../models/project.model';

const BASE = 'projects/mrlucho/';

export const PROJECTS: Project[] = [
  {
    title: 'plataforma de pedidos a domicilio para restaurantes',
    description:
      'Plataforma web para que los clientes de un restaurante hagan sus pedidos a domicilio en línea, sin depender de conversaciones por WhatsApp. El cliente elige sus productos, paga y sigue el estado de su pedido; el restaurante lo gestiona desde un panel de administración con menú, reservas y métricas.',
    technologies: ['Angular', 'TypeScript', 'Django', 'Django REST Framework', 'PostgreSQL'],
    features: [
      'Catálogo, carrito y confirmación de pedido para el cliente',
      'Pago en efectivo, Nequi o Bancolombia con carga de comprobante',
      'Seguimiento del pedido en cada estado e historial del cliente',
      'Panel de administración con autenticación',
      'Control de pedidos: aceptado, en preparación, en camino y entregado',
      'Gestión del menú, reservas y dashboard con métricas',
    ],
    admin: [
      {
        src: BASE + 'mrlucho-admin-login.webp',
        alt: 'Inicio de sesión del panel de administración',
        caption: 'Inicio de sesión',
      },
      {
        src: BASE + 'mrlucho-admin-dashboard.webp',
        alt: 'Dashboard con métricas del restaurante',
        caption: 'Dashboard',
      },
      { src: BASE + 'mrlucho-admin-pedidos.webp', alt: 'Listado de pedidos', caption: 'Pedidos' },
      {
        src: BASE + 'mrlucho-admin-pedidos-activos.webp',
        alt: 'Pedidos activos con su estado',
        caption: 'Pedidos activos',
      },
      {
        src: BASE + 'mrlucho-admin-menu.webp',
        alt: 'Gestión del menú del restaurante',
        caption: 'Gestión del menú',
      },
      {
        src: BASE + 'mrlucho-admin-reservas.webp',
        alt: 'Gestión de reservas',
        caption: 'Reservas',
      },
    ],
    client: [
      {
        src: BASE + 'mrlucho-cliente-catalogo.webp',
        alt: 'Catálogo de productos',
        caption: 'Catálogo',
      },
      { src: BASE + 'mrlucho-cliente-carrito.webp', alt: 'Carrito de compras', caption: 'Carrito' },
      {
        src: BASE + 'mrlucho-cliente-confirmar.webp',
        alt: 'Confirmación del pedido',
        caption: 'Confirmar pedido',
      },
      {
        src: BASE + 'mrlucho-cliente-pago-nequi.webp',
        alt: 'Pago con Nequi y carga de comprobante',
        caption: 'Pago con Nequi',
      },
      {
        src: BASE + 'mrlucho-cliente-confirmado.webp',
        alt: 'Pedido confirmado',
        caption: 'Pedido confirmado',
      },
      {
        src: BASE + 'mrlucho-cliente-seguimiento.webp',
        alt: 'Seguimiento del pedido',
        caption: 'Seguimiento',
      },
      {
        src: BASE + 'mrlucho-cliente-historial.webp',
        alt: 'Historial de pedidos del cliente',
        caption: 'Historial',
      },
    ],
  },
];
