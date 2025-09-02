# Angular Blog Platform

A modern, responsive blog platform built with Angular 20, featuring a clean design and rich text editing capabilities. This project showcases modern Angular development practices including standalone components, control flow syntax, lazy loading, and reactive programming.

<img width="1487" height="873" alt="image" src="https://github.com/user-attachments/assets/500fbb96-ac30-49cd-930f-cc7dea62ec3d" />
<img width="1167" height="783" alt="image" src="https://github.com/user-attachments/assets/b653af4a-f19f-48d5-a177-8f48800ecb54" />

## 🚀 Features

- **Modern Angular 20**: Built with the latest Angular features including standalone components and control flow syntax
- **Rich Text Editor**: Integrated Quill 2.0 editor for creating and editing blog posts
- **Responsive Design**: Mobile-first approach with beautiful UI/UX
- **Blog Management**: Create, view, and manage blog posts with comments
- **Search & Filter**: Real-time search functionality for blog posts
- **Lazy Loading**: Route-based code splitting for optimal performance
- **Animations**: Smooth animations using Angular Animations API
- **Mock Data**: JSON-based mock data for development and demonstration

## 🛠️ Technologies Used

- **Angular 20.2.3** - Modern web framework with standalone components and control flow
- **TypeScript 5.9** - Type-safe development
- **SCSS** - Advanced CSS with variables and mixins
- **Quill.js 2.0.3** - Rich text editor via ngx-quill 28.0.1
- **RxJS** - Reactive programming with Observables
- **Angular Router** - Client-side routing with lazy loading
- **Angular Animations** - Smooth UI transitions

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── blogs/
│   │   │   ├── blogs-list/          # Blog listing with search & pagination
│   │   │   ├── blog-view/           # Individual blog post view
│   │   │   └── create-blog/         # Blog creation form with Quill editor
│   │   ├── header/                  # Navigation header
│   │   └── footer/                  # Footer with social links
│   ├── models/
│   │   └── blogs.model.ts           # TypeScript interfaces for blog data
│   ├── services/
│   │   └── mock-data.service.ts     # Data service with BehaviorSubject
│   ├── enums/
│   │   └── paths.ts                 # Route path constants
│   └── environments/
│       └── environment.ts           # Environment configuration
├── assets/
│   ├── fonts/                       # Custom fonts (Mulish, Cabin, Karla, Mukta)
│   ├── images/                      # SVG icons and images
│   └── mock-data/
│       └── blogs-mock.json          # Mock blog data with comments
└── styles.scss                     # Global styles with CSS variables
```

## 🎨 Design System

The project implements a consistent design system with:

- **CSS Custom Properties**: Centralized color scheme and theming
- **Custom Fonts**: Mulish (primary), Cabin, Karla, and Mukta
- **Component Library**: Reusable button styles and UI components
- **Responsive Layout**: Mobile-first design with flexible grid system
- **Color Palette**: Professional blue and gray color scheme

## 🚦 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager
- Angular CLI (optional but recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd blogs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/`

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run watch` - Build in watch mode for development
- `npm test` - Run unit tests

## 🏗️ Architecture

### Component Architecture

- **Standalone Components**: All components are standalone, eliminating the need for NgModules
- **Lazy Loading**: Routes are lazily loaded for better performance
- **Smart/Dumb Pattern**: Clear separation between container and presentational components

### State Management

- **BehaviorSubject**: Reactive state management using RxJS BehaviorSubject
- **Service Layer**: Centralized data management through services
- **Immutable Updates**: State updates follow immutable patterns

### Routing

```typescript
Routes:
├── '' (redirect to /blogs)
├── '/blogs' - Blog list view
├── '/blogs/:id' - Individual blog view
├── '/create-blogs' - Blog creation form
└── '**' - Wildcard redirect to blogs
```

## 📱 Features Deep Dive

### Blog List Component
- **Search Functionality**: Real-time filtering with minimum 3 characters
- **Pagination**: Load more posts with batch loading (9 posts per batch)
- **Animations**: Staggered list animations for smooth UX
- **Responsive Grid**: Adaptive layout for different screen sizes

### Blog Creation
- **Rich Text Editor**: Full-featured Quill.js integration
- **Form Validation**: Reactive forms with validation
- **Image Support**: URL-based image integration
- **Auto-save**: Automatic saving with loading states

### Blog View
- **Dynamic Routing**: URL-based blog post loading
- **Comments System**: Display blog comments with avatars
- **Responsive Images**: Optimized image loading
- **Social Sharing**: Ready for social media integration

## 🎯 Performance Optimizations

- **Lazy Loading**: Route-based code splitting
- **OnPush Change Detection**: Optimized change detection strategy
- **Image Optimization**: NgOptimizedImage for better loading
- **Bundle Analysis**: Webpack bundle optimization
- **Tree Shaking**: Unused code elimination

## 🚀 Deployment

### Production Build

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory, optimized for production with:
- Minification and uglification
- Tree shaking for smaller bundles
- Ahead-of-time (AOT) compilation
- Service worker ready

### Deployment Options

**Static Hosting (Recommended):**
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

**Traditional Hosting:**
- Apache/Nginx
- Node.js server with Express

### Environment Configuration

Update `src/environments/environment.ts` for different environments:
```typescript
export const environment = {
  production: true,
  baseApiUrl: 'https://api.yourdomain.com',
  mockApiUrl: 'assets/mock-data/blogs-mock.json'
};
```

## 🧪 Testing

The project includes testing setup with:
- **Jasmine**: Testing framework
- **Karma**: Test runner
- **Component Testing**: Unit tests for components
- **Service Testing**: Service layer testing

Run tests:
```bash
npm test
```

## 🔧 Development Guidelines

### Code Style
- **TypeScript Strict Mode**: Enabled for type safety
- **ESLint**: Code linting and formatting
- **Prettier**: Code formatting
- **Angular Style Guide**: Following official Angular conventions

### Component Development
- Use standalone components
- Implement OnPush change detection where possible
- Follow reactive programming patterns
- Maintain component isolation

## 📈 Future Enhancements

- **Authentication System**: User login and registration
- **Real API Integration**: Replace mock data with REST API
- **Comment Management**: Add, edit, delete comments
- **Blog Categories**: Organize posts by categories
- **SEO Optimization**: Meta tags and structured data
- **PWA Features**: Service worker and offline support
- **Dark Mode**: Theme switching capability
- **Image Upload**: Direct image upload functionality

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Created as a portfolio project demonstrating modern Angular development practices and responsive web design.

---

**Built with ❤️ using Angular 17**
