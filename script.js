// ===== Local Storage Data =====
const DEFAULT_DATA = {
    headerSubtitle: 'Chuyên sửa chữa, bảo dưỡng và nâng cấp xe ô tô',
    servicesSubtitle: 'Cung cấp các dịch vụ chất lượng cao cho xe ô tô của bạn',
    gallerySubtitle: 'Xem hình ảnh các dự án của chúng tôi',
    contactPhone: '02623 777 999',
    contactAddress: '569 Lê Duẩn, Phường Buôn Ma Thuột, Đắk Lắk',
    contactEmail: 'phuongdong@email.com'
};

// Tài khoản demo
const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: '123456'
};

// ===== Initialize Page =====
document.addEventListener('DOMContentLoaded', function() {
    loadDataFromStorage();
    setupEventListeners();
});

// ===== Load Data from Storage =====
function loadDataFromStorage() {
    const storedData = JSON.parse(localStorage.getItem('websiteData')) || {};
    
    // Update page content with stored data
    document.getElementById('headerSubtitle').textContent = storedData.headerSubtitle || DEFAULT_DATA.headerSubtitle;
    document.getElementById('servicesSubtitle').textContent = storedData.servicesSubtitle || DEFAULT_DATA.servicesSubtitle;
    document.getElementById('gallerySubtitle').textContent = storedData.gallerySubtitle || DEFAULT_DATA.gallerySubtitle;
    document.getElementById('contactPhone').textContent = storedData.contactPhone || DEFAULT_DATA.contactPhone;
    document.getElementById('contactAddress').textContent = storedData.contactAddress || DEFAULT_DATA.contactAddress;
    document.getElementById('contactEmail').textContent = storedData.contactEmail || DEFAULT_DATA.contactEmail;
    
    // Populate admin form with current data
    document.getElementById('headerSubtitleInput').value = storedData.headerSubtitle || DEFAULT_DATA.headerSubtitle;
    document.getElementById('servicesSubtitleInput').value = storedData.servicesSubtitle || DEFAULT_DATA.servicesSubtitle;
    document.getElementById('gallerySubtitleInput').value = storedData.gallerySubtitle || DEFAULT_DATA.gallerySubtitle;
    document.getElementById('phoneInput').value = storedData.contactPhone || DEFAULT_DATA.contactPhone;
    document.getElementById('addressInput').value = storedData.contactAddress || DEFAULT_DATA.contactAddress;
    document.getElementById('emailInput').value = storedData.contactEmail || DEFAULT_DATA.contactEmail;
    
    // Check if user is logged in
    if (sessionStorage.getItem('adminLoggedIn') === 'true') {
        showAdminDashboard();
    }
}

// ===== Event Listeners =====
function setupEventListeners() {
    // Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Close menu when clicking on links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
    
    // Close modal when clicking outside
    const loginModal = document.getElementById('loginModal');
    window.addEventListener('click', function(event) {
        if (event.target == loginModal) {
            closeLoginModal();
        }
    });
    
    const lightbox = document.getElementById('lightbox');
    window.addEventListener('click', function(event) {
        if (event.target == lightbox) {
            closeLightbox();
        }
    });
}

// ===== Login Modal Functions =====
function openLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
}

function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
        sessionStorage.setItem('adminLoggedIn', 'true');
        closeLoginModal();
        showAdminDashboard();
        // Clear form
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    } else {
        alert('Tên người dùng hoặc mật khẩu không đúng!\n\nDemo:\nUsername: admin\nPassword: 123456');
    }
}

function logout() {
    sessionStorage.removeItem('adminLoggedIn');
    document.getElementById('adminDashboard').style.display = 'none';
    document.querySelector('nav').style.display = 'block';
    document.querySelector('main') ? document.querySelector('main').style.display = 'block' : null;
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'block';
    });
    document.querySelector('footer').style.display = 'block';
}

function showAdminDashboard() {
    // Hide main content
    document.querySelector('nav').style.display = 'block';
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
    document.querySelector('footer').style.display = 'none';
    
    // Show admin dashboard
    document.getElementById('adminDashboard').style.display = 'block';
    
    // Load current gallery list
    loadCurrentGalleryList();
}

// ===== Admin Tab Functions =====
function switchTab(tabName) {
    // Hide all tabs
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from all buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab
    const selectedTab = document.getElementById(tabName + 'Tab');
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // Add active class to clicked button
    event.target.classList.add('active');
}

// ===== Save Content Functions =====
function saveContent() {
    const data = {
        headerSubtitle: document.getElementById('headerSubtitleInput').value,
        servicesSubtitle: document.getElementById('servicesSubtitleInput').value,
        gallerySubtitle: document.getElementById('gallerySubtitleInput').value
    };
    
    // Merge with existing data
    const existingData = JSON.parse(localStorage.getItem('websiteData')) || {};
    const updatedData = { ...existingData, ...data };
    
    localStorage.setItem('websiteData', JSON.stringify(updatedData));
    
    // Update page
    loadDataFromStorage();
    alert('Nội dung đã được lưu thành công!');
}

function saveContact() {
    const data = {
        contactPhone: document.getElementById('phoneInput').value,
        contactAddress: document.getElementById('addressInput').value,
        contactEmail: document.getElementById('emailInput').value
    };
    
    // Merge with existing data
    const existingData = JSON.parse(localStorage.getItem('websiteData')) || {};
    const updatedData = { ...existingData, ...data };
    
    localStorage.setItem('websiteData', JSON.stringify(updatedData));
    
    // Update page
    loadDataFromStorage();
    alert('Thông tin liên hệ đã được lưu thành công!');
}

// ===== Gallery Image Functions =====
function loadCurrentGalleryList() {
    const galleryList = document.getElementById('currentGalleryList');
    galleryList.innerHTML = '';
    
    const galleryItems = document.querySelectorAll('#galleryGrid .gallery-item');
    galleryItems.forEach((item, index) => {
        const img = item.querySelector('.gallery-img');
        const src = img.src;
        const alt = img.alt;
        
        const itemDiv = document.createElement('div');
        itemDiv.className = 'gallery-item-preview';
        itemDiv.innerHTML = `
            <img src="${src}" alt="${alt}">
            <button class="delete-btn" onclick="deleteGalleryItem('${src}')" title="Xóa ảnh">×</button>
        `;
        
        galleryList.appendChild(itemDiv);
    });
}

function uploadGalleryImages() {
    const fileInput = document.getElementById('galleryFileInput');
    const files = fileInput.files;
    
    if (files.length === 0) {
        alert('Vui lòng chọn ít nhất một ảnh!');
        return;
    }
    
    // Note: Trong môi trường thực tế, bạn cần upload lên server
    // Ở đây chúng ta sẽ sử dụng FileReader để chuyển đổi thành base64
    let filesProcessed = 0;
    const newImages = [];
    
    for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            newImages.push({
                src: e.target.result,
                alt: `Ảnh được tải lên ${filesProcessed + 1}`
            });
            
            filesProcessed++;
            
            // When all files are read
            if (filesProcessed === files.length) {
                // Get existing gallery images data
                const existingImages = JSON.parse(localStorage.getItem('galleryImages')) || [];
                
                // Add new images
                const allImages = [...existingImages, ...newImages];
                
                // Save to localStorage
                localStorage.setItem('galleryImages', JSON.stringify(allImages));
                
                alert('Ảnh đã được tải lên thành công!');
                fileInput.value = '';
                loadCurrentGalleryList();
            }
        };
        
        reader.readAsDataURL(files[i]);
    }
}

function deleteGalleryItem(src) {
    if (!confirm('Bạn có chắc chắn muốn xóa ảnh này?')) {
        return;
    }
    
    const galleryImages = JSON.parse(localStorage.getItem('galleryImages')) || [];
    const filteredImages = galleryImages.filter(img => img.src !== src);
    
    localStorage.setItem('galleryImages', JSON.stringify(filteredImages));
    loadCurrentGalleryList();
    alert('Ảnh đã được xóa!');
}

// ===== Lightbox Functions =====
let currentLightboxIndex = 0;
const galleryImages = document.querySelectorAll('#galleryGrid .gallery-img');

function openLightbox(element) {
    const lightbox = document.getElementById('lightbox');
    const img = element.querySelector('.gallery-img');
    const lightboxImg = document.getElementById('lightboxImg');
    
    // Find current image index
    const images = document.querySelectorAll('#galleryGrid .gallery-img');
    for (let i = 0; i < images.length; i++) {
        if (images[i] === img) {
            currentLightboxIndex = i;
            break;
        }
    }
    
    lightboxImg.src = img.src;
    lightbox.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function changeLightboxImage(n) {
    const images = document.querySelectorAll('#galleryGrid .gallery-img');
    currentLightboxIndex += n;
    
    if (currentLightboxIndex >= images.length) {
        currentLightboxIndex = 0;
    }
    if (currentLightboxIndex < 0) {
        currentLightboxIndex = images.length - 1;
    }
    
    document.getElementById('lightboxImg').src = images[currentLightboxIndex].src;
}

// ===== Email Configuration =====
emailjs.init('YOUR_PUBLIC_KEY'); // Thay thế bằng Public Key từ EmailJS

// ===== Contact Form Handler =====
function handleContactForm(event) {
    event.preventDefault();
    
    const form = document.getElementById('contactForm');
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail_input').value;
    const subject = document.getElementById('contactSubject').value;
    const message = document.getElementById('contactMessage').value;
    
    // Email parameters
    const templateParams = {
        to_email: 'phamgiaan545@gmail.com',
        from_name: name,
        from_email: email,
        subject: subject || 'Khách hàng liên hệ từ website',
        message: message,
        reply_to: email
    };
    
    // Gửi email
    emailjs.send('service_default', 'template_default', templateParams)
        .then(function(response) {
            console.log('Email sent successfully:', response);
            alert('Cảm ơn bạn đã gửi tin nhắn! Chúng tôi sẽ liên hệ với bạn sớm.');
            form.reset();
        }, function(error) {
            console.error('Failed to send email:', error);
            alert('Gửi tin nhắn thất bại. Vui lòng thử lại hoặc liên hệ trực tiếp.');
        });
}

// ===== Keyboard Navigation =====
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeLoginModal();
        closeLightbox();
    }
});

// ===== Scroll to Top Button =====
window.addEventListener('scroll', function() {
    // Có thể thêm các hiệu ứng scroll khác ở đây
});

// ===== Demo Credentials Display (optional) =====
// Uncomment để hiển thị thông tin demo trong console
console.log('%c🔑 Demo Credentials', 'color: #dc143c; font-size: 16px; font-weight: bold;');
console.log('%cUsername: admin\nPassword: 123456', 'color: #333; font-size: 12px;');
