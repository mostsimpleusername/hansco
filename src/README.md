# AirstreamPro Marketing Agency Website - Go Version

A complete marketing agency website built with Go, featuring a public-facing website and comprehensive admin dashboard for content management.

## Features

### Public Website
- **Homepage** with hero section, services showcase, stats, testimonials
- **About Page** with team information and company values
- **Blog System** with categorized posts and individual post pages
- **FAQ Section** with expandable questions and answers
- **Contact Form** with message submission and validation
- **Responsive Design** that works on all devices

### Admin Dashboard
- **Authentication System** with session management
- **Blog Post Management** (Create, Read, Update, Delete)
- **Contact Form Management** with status tracking
- **FAQ Management** for website content
- **Analytics Dashboard** with key metrics
- **User-friendly Interface** for content management

### Technical Features
- **SQLite Database** for easy deployment and data persistence
- **GORM ORM** for database operations
- **Gin Web Framework** for fast HTTP routing
- **HTML Templates** with Go templating engine
- **Session-based Authentication** for admin security
- **Mobile-responsive Design** with Tailwind CSS

## Quick Start

### Prerequisites
- Go 1.21 or higher
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd marketing-agency-go
   ```

2. **Install dependencies**
   ```bash
   go mod download
   ```

3. **Run the application**
   ```bash
   go run main.go
   ```

4. **Access the website**
   - Website: http://localhost:8080
   - Admin: http://localhost:8080/admin/login
   - Default admin credentials: `admin` / `admin123`

## Deployment Options

### 1. Docker Deployment (Recommended)

**Build and run with Docker:**
```bash
# Build the Docker image
docker build -t marketing-agency .

# Run the container
docker run -p 8080:8080 -v $(pwd)/data:/data marketing-agency
```

**Using Docker Compose:**
```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "8080:8080"
    volumes:
      - ./data:/data
    environment:
      - GIN_MODE=release
      - PORT=8080
```

### 2. Heroku Deployment

1. **Create a Heroku app**
   ```bash
   heroku create your-app-name
   ```

2. **Add the Go buildpack**
   ```bash
   heroku buildpacks:set heroku/go
   ```

3. **Deploy**
   ```bash
   git add .
   git commit -m "Deploy to Heroku"
   git push heroku main
   ```

### 3. DigitalOcean App Platform

1. **Create `app.yaml`**
   ```yaml
   name: marketing-agency
   services:
   - name: web
     source_dir: /
     github:
       repo: your-username/your-repo
       branch: main
     run_command: ./main
     environment_slug: go
     instance_count: 1
     instance_size_slug: basic-xxs
     http_port: 8080
   ```

2. **Deploy via DigitalOcean Dashboard or CLI**

### 4. VPS Deployment (Ubuntu/CentOS)

1. **Install Go on your server**
   ```bash
   wget https://golang.org/dl/go1.21.0.linux-amd64.tar.gz
   sudo tar -C /usr/local -xzf go1.21.0.linux-amd64.tar.gz
   export PATH=$PATH:/usr/local/go/bin
   ```

2. **Clone and build**
   ```bash
   git clone <your-repo>
   cd marketing-agency-go
   go build -o marketing-agency main.go
   ```

3. **Create systemd service** (`/etc/systemd/system/marketing-agency.service`)
   ```ini
   [Unit]
   Description=Marketing Agency Website
   After=network.target

   [Service]
   Type=simple
   User=www-data
   WorkingDirectory=/path/to/your/app
   ExecStart=/path/to/your/app/marketing-agency
   Restart=always
   Environment=GIN_MODE=release
   Environment=PORT=8080

   [Install]
   WantedBy=multi-user.target
   ```

4. **Start the service**
   ```bash
   sudo systemctl enable marketing-agency
   sudo systemctl start marketing-agency
   ```

5. **Configure Nginx reverse proxy**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:8080;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
       }
   }
   ```

### 5. AWS EC2 Deployment

1. **Launch EC2 instance** (Amazon Linux 2 or Ubuntu)
2. **Install Go** and clone your repository
3. **Build the application**
4. **Use systemd** or **PM2** to manage the process
5. **Configure security groups** to allow HTTP traffic
6. **Optional: Use Application Load Balancer** for high availability

### 6. Railway Deployment

1. **Connect your GitHub repository** to Railway
2. **Railway will auto-detect** Go and deploy automatically
3. **Add environment variables** if needed

## Environment Variables

- `PORT` - Server port (default: 8080)
- `GIN_MODE` - Gin mode (debug/release)
- `DB_PATH` - Database file path (default: marketing_agency.db)

## Database

The application uses SQLite by default for simplicity. For production, you can easily switch to PostgreSQL or MySQL by modifying the database configuration in `main.go`.

**To switch to PostgreSQL:**
```go
import "gorm.io/driver/postgres"

dsn := "host=localhost user=username password=password dbname=marketing_agency port=5432 sslmode=disable"
db, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
```

## Security Considerations

For production deployment:

1. **Change default admin credentials**
2. **Use environment variables** for sensitive data
3. **Enable HTTPS** with SSL certificates
4. **Use secure session keys**
5. **Implement rate limiting**
6. **Add input validation and sanitization**
7. **Use bcrypt for password hashing**

## Customization

### Adding New Pages
1. Create HTML template in `/templates/`
2. Add route handler in `main.go`
3. Update navigation in header template

### Styling Changes
- Modify the CSS in template files
- Update Tailwind classes as needed
- Add custom styles in `<style>` blocks

### Database Schema Changes
- Update struct models in `main.go`
- Run auto-migration on startup
- Handle data migration if needed

## Support

For issues or questions:
1. Check the GitHub issues
2. Review the documentation
3. Contact the development team

## License

This project is licensed under the MIT License.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

**Note:** This Go version provides the same functionality as the original React application but with server-side rendering and a traditional web architecture that's perfect for SEO and simple deployment.