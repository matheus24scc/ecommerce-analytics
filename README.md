# Ecommerce Analytics Dashboard

A modern React dashboard for e-commerce analytics built with React 18, TypeScript, and Material-UI.

## Features

- **Dashboard Overview**: Key metrics including total sales, orders, growth rate, and return rate
- **Products Inventory**: Table view of product inventory with categories and stock levels
- **Sales Overview**: Interactive line chart showing sales trends over time
- **Responsive Design**: Mobile-friendly layout with collapsible sidebar
- **Redux Toolkit**: Centralized state management with RTK Query
- **Material-UI**: Consistent and accessible UI components

## Tech Stack

| Technology | Version |
|------------|---------|
| React | 18.2.0 |
| TypeScript | 5.3.3 |
| Vite | 5.1.0 |
| Redux Toolkit | 2.2.1 |
| React Redux | 9.1.0 |
| Material-UI (MUI) | 5.15.0 |
| Recharts | 2.10.0 |
| React Router | 6.21.0 |

## Project Structure

```
src/
├── App.tsx           # Main application component with routing
├── main.tsx          # Application entry point
├── index.css         # Global styles
├── components/
│   └── layout/
│       ├── Header.tsx    # Top navigation bar
│       └── Sidebar.tsx   # Collapsible navigation sidebar
├── pages/
│   ├── Dashboard.tsx   # Dashboard overview page
│   ├── Products.tsx    # Products inventory page
│   └── Sales.tsx       # Sales analytics page
├── services/
│   └── api.ts          # RTK Query API service
├── store/
│   ├── store.ts        # Redux store configuration
│   └── uiSlice.ts      # UI state slice (sidebar state)
├── theme/
│   └── theme.ts        # MUI theme configuration
└── assets/             # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm 9.0.0 or higher (or yarn)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/ecommerce-analytics.git
cd ecommerce-analytics
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000` with hot module reloading enabled.

### Building for Production

Build the project:
```bash
npm run build
```

The optimized production files will be in the `dist/` directory.

Preview the production build:
```bash
npm run serve
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server (port 3000) |
| `npm run build` | Build for production |
| `npm run serve` | Preview production build |
| `npm run lint` | Run ESLint to check for issues |

## State Management

The application uses Redux Toolkit with the following structure:

- **apiSlice**: RTK Query slice for API data fetching
- **uiSlice**: UI state management (sidebar open/close)

### Store Configuration

The store is configured in `src/store/store.ts` with:
- RTK Query middleware for API handling
- Auto-generated action creators and selectors

## UI Components

### Header

The header includes:
- Application title
- Notification button (4 notifications)
- User menu button
- Sidebar toggle button (mobile)

### Sidebar

Navigation items:
- Dashboard
- Products
- Sales
- Orders

The sidebar is:
- Temporary on mobile (appears when menu button is clicked)
- Permanent on desktop
- Collapsible via toggle button

## API Integration

The application uses RTK Query for data fetching. API endpoints are defined in `src/services/api.ts`:

```typescript
// Example endpoints
useGetDashboardStatsQuery()
useGetProductsQuery()
useGetSalesDataQuery()
```

## Theme Customization

The MUI theme is configured in `src/theme/theme.ts` with:
- Primary color: #1976d2 (blue)
- Secondary color: #dc004e (red)
- Custom typography with Roboto font
- Rounded corners (8px border radius)

## Roadmap

- [ ] Authentication system
- [ ] Real API integration
- [ ] Dark mode toggle
- [ ] Export functionality (CSV/PDF)
- [ ] Advanced filtering and search
- [ ] User role-based access control

## License

This project is open source and available under the MIT License.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Acknowledgments

- [React](https://reactjs.org/)
- [Material-UI](https://mui.com/)
- [Recharts](https://recharts.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)

## Status (checkup 2026-08-18)
> Revisado na campanha de repo-checkup. Relatorio completo: `~/repo-checkup/reports/ecommerce-analytics.md` (local do mantenedor, nao no repo).
- **Build/Install**: PASS — `npm ci` RC=0; `npm run build` RC=0 (1718 módulos transformados, `dist/` gerado).
- **Smoke test**: N/A — não há script `test` nem arquivos de teste no repo.
- **Para rodar de ponta-a-ponta precisa de**: nenhum serviço externo (app front-end Vite/React; sem backend/DB citado no checkup).
- **Inconsistencias conhecidas (README vs codigo)**: README declarava "MIT License" mas não havia arquivo `LICENSE` (corrigido no checkup: `LICENSE` MIT adicionada).
- **Seguranca**: 4 vulnerabilidades (1 high, 3 moderate) em deps transitivas — `vite <=6.4.2` (high), `esbuild <=0.24.2` (moderate), `react-router`/`react-router-dom` 6.x (moderate); o fix exige major bump (`vite@8`, `react-router@7`) → NÃO corrigidas automaticamente (decisão humana); não foi rodado `npm audit fix --force`.
- **Estado resumido**: build verde, mas lint FAIL (sem ESLint config próprio) e 4 vulns (1 high) exigem ação humana (upgrades breaking); repo sem suíte de testes.
