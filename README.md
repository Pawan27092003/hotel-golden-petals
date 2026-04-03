<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hotel Golden Petals & Banquets — Greater Noida</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
  <style>
    /* ============================================
       ROOT VARIABLES
       ============================================ */
    :root {
      --gold: #C8973A;
      --gold2: #E8C97A;
      --gold-dark: #8B6510;
      --dark: #0E0C08;
      --dark2: #1A1710;
      --ivory: #FAF6EE;
      --stone: #5A5040;
      --mist: #EDE5D4;
      --white: #FFFEF9;
      --wa: #25D366;
      --transition: 0.3s ease;
    }

    /* ============================================
       RESET & BASE STYLES
       ============================================ */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: 'DM Sans', sans-serif;
      background: var(--white);
      color: var(--dark);
      overflow-x: hidden;
      line-height: 1.6;
    }

    /* ============================================
       CONTAINER - FIX CENTER & EMPTY SPACE
       ============================================ */
    .container {
      width: 100%;
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 50px;
    }

    @media (max-width: 1024px) {
      .container {
        padding: 0 40px;
      }
    }

    @media (max-width: 768px) {
      .container {
        padding: 0 25px;
      }
    }

    @media (max-width: 480px) {
      .container {
        padding: 0 16px;
      }
    }

    /* ============================================
       SECTION COMMON
       ============================================ */
    .section {
      padding: 120px 0;
    }

    .section-light {
      background: var(--white);
    }

    .section-dark {
      background: var(--dark);
    }

    .section-ivory {
      background: var(--ivory);
    }

    .section-tag {
      display: block;
      font-size: 11px;
      letter-spacing: 4px;
      text-transform: uppercase;
      color: var(--gold);
      margin-bottom: 16px;
      font-weight: 500;
    }

    .section-title {
      font-family: 'Playfair Display', serif;
      font-size: clamp(34px, 5vw, 56px);
      font-weight: 600;
      line-height: 1.2;
      color: var(--dark);
      margin-bottom: 16px;
    }

    .section-dark .section-title {
      color: #fff;
    }

    .section-title em {
      font-style: italic;
      color: var(--gold-dark);
    }

    .section-desc {
      font-size: 16px;
      line-height: 1.8;
      color: var(--stone);
      max-width: 600px;
      margin-top: 20px;
    }

    .section-dark .section-desc {
      color: rgba(255, 255, 255, 0.6);
    }

    /* ============================================
       SCROLLBAR
       ============================================ */
    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      background: var(--dark);
    }

    ::-webkit-scrollbar-thumb {
      background: var(--gold);
      border-radius: 5px;
    }

    /* ============================================
       NAVIGATION
       ============================================ */
    #nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 999;
      padding: 18px 0;
      display: flex;
      align-items: center;
      transition: var(--transition);
      background: transparent;
    }

    #nav.scrolled {
      background: rgba(14, 12, 8, 0.95);
      backdrop-filter: blur(16px);
      padding: 12px 0;
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    }

    .nav-container {
      width: 100%;
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    @media (max-width: 1024px) {
      .nav-container {
        padding: 0 40px;
      }
    }

    @media (max-width: 768px) {
      .nav-container {
        padding: 0 25px;
      }
    }

    .nav-logo {
      font-family: 'Playfair Display', serif;
      font-size: 24px;
      font-weight: 700;
      color: #fff;
      text-decoration: none;
      letter-spacing: 1px;
    }

    .nav-logo span {
      color: var(--gold);
    }

    .nav-links {
      display: flex;
      gap: 40px;
      list-style: none;
    }

    .nav-links a {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      font-size: 12px;
      letter-spacing: 2px;
      text-transform: uppercase;
      font-weight: 400;
      transition: var(--transition);
      position: relative;
    }

    .nav-links a:hover {
      color: var(--gold);
    }

    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--gold);
      transition: width 0.3s ease;
    }

    .nav-links a:hover::after {
      width: 100%;
    }

    .nav-wa {
      background: var(--wa);
      color: #fff;
      padding: 10px 24px;
      font-size: 11px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      text-decoration: none;
      font-weight: 500;
      border-radius: 2px;
      transition: var(--transition);
      display: inline-block;
      border: none;
      cursor: pointer;
    }

    .nav-wa:hover {
      background: #1ebe5a;
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(37, 211, 102, 0.3);
    }

    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }
    }

    /* ============================================
       HERO
       ============================================ */
    #hero {
      position: relative;
      height: 100vh;
      min-height: 600px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      margin-top: 60px;
    }

    .hero-img {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center 30%;
      transition: transform 8s ease;
      background-image: url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1400&q=80');
    }

    #hero:hover .hero-img {
      transform: scale(1.04);
    }

    .hero-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        170deg,
        rgba(10, 8, 3, 0.75) 0%,
        rgba(10, 8, 3, 0.45) 50%,
        rgba(10, 8, 3, 0.8) 100%
      );
    }

    .hero-inner {
      position: relative;
      text-align: center;
      padding: 0 20px;
      max-width: 900px;
      z-index: 2;
    }

    .hero-tag {
      display: inline-block;
      border: 1px solid var(--gold2);
      color: var(--gold2);
      font-size: 10px;
      letter-spacing: 5px;
      text-transform: uppercase;
      padding: 8px 24px;
      margin-bottom: 28px;
    }

    .hero h1 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(48px, 7vw, 90px);
      font-weight: 700;
      color: #fff;
      line-height: 1.05;
      margin-bottom: 16px;
    }

    .hero h1 em {
      color: var(--gold2);
      font-style: italic;
    }

    .hero-sub {
      font-size: 13px;
      letter-spacing: 4px;
      color: rgba(255, 255, 255, 0.6);
      text-transform: uppercase;
      margin-bottom: 48px;
    }

    .hero-btns {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      justify-content: center;
    }

    .hero-scroll {
      position: absolute;
      bottom: 40px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      color: rgba(255, 255, 255, 0.4);
      font-size: 9px;
      letter-spacing: 2px;
    }

    .hero-scroll-line {
      width: 1px;
      height: 30px;
      background: rgba(255, 255, 255, 0.2);
    }

    /* ============================================
       BUTTONS
       ============================================ */
    .btn-gold {
      background: var(--gold);
      color: #fff;
      padding: 14px 40px;
      font-size: 12px;
      letter-spacing: 2px;
      text-transform: uppercase;
      text-decoration: none;
      font-weight: 500;
      transition: var(--transition);
      border: none;
      cursor: pointer;
      border-radius: 2px;
      display: inline-block;
      box-shadow: 0 4px 15px rgba(200, 151, 58, 0.2);
    }

    .btn-gold:hover {
      background: var(--gold-dark);
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(200, 151, 58, 0.3);
    }

    .btn-ghost {
      border: 1px solid rgba(255, 255, 255, 0.4);
      color: #fff;
      padding: 14px 40px;
      font-size: 12px;
      letter-spacing: 2px;
      text-transform: uppercase;
      text-decoration: none;
      font-weight: 400;
      transition: var(--transition);
      background: transparent;
      border-radius: 2px;
      display: inline-block;
      cursor: pointer;
    }

    .btn-ghost:hover {
      border-color: var(--gold2);
      color: var(--gold2);
      background: rgba(200, 151, 58, 0.1);
    }

    /* ============================================
       STATS STRIP
       ============================================ */
    .stats-strip {
      background: var(--dark2);
      padding: 60px 0;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1px;
      border-top: 2px solid var(--gold);
    }

    .stat-item {
      text-align: center;
      padding: 40px 30px;
      border-right: 1px solid rgba(255, 255, 255, 0.08);
    }

    .stat-item:last-child {
      border-right: none;
    }

    .stat-n {
      font-family: 'Playfair Display', serif;
      font-size: 48px;
      font-weight: 600;
      color: var(--gold);
      display: block;
      line-height: 1;
    }

    .stat-l {
      font-size: 10px;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.5);
      margin-top: 12px;
      display: block;
    }

    /* ============================================
       ABOUT SECTION
       ============================================ */
    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 80px;
      align-items: center;
    }

    .about-text p {
      font-size: 16px;
      line-height: 1.85;
      color: var(--stone);
      margin-top: 20px;
      margin-bottom: 20px;
    }

    .about-img-wrap {
      position: relative;
    }

    .about-img-main {
      width: 100%;
      height: 480px;
      object-fit: cover;
      display: block;
      border-radius: 8px;
    }

    .about-corner {
      position: absolute;
      top: -14px;
      right: -14px;
      width: 70px;
      height: 70px;
      border-top: 2px solid var(--gold);
      border-right: 2px solid var(--gold);
    }

    .about-badge {
      position: absolute;
      bottom: -20px;
      left: -20px;
      background: var(--gold);
      color: #fff;
      padding: 18px 24px;
      font-family: 'Playfair Display', serif;
      font-size: 28px;
      font-weight: 600;
      line-height: 1;
      text-align: center;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }

    .about-badge small {
      display: block;
      font-family: 'DM Sans', sans-serif;
      font-size: 9px;
      letter-spacing: 3px;
      text-transform: uppercase;
      font-weight: 400;
      margin-top: 4px;
      color: rgba(255, 255, 255, 0.9);
    }

    @media (max-width: 768px) {
      .about-grid {
        grid-template-columns: 1fr;
        gap: 40px;
      }
    }

    /* ============================================
       ROOMS SECTION
       ============================================ */
    .rooms-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 30px;
      margin-top: 60px;
    }

    .room-card {
      background: #fff;
      border: 1px solid var(--mist);
      border-radius: 8px;
      overflow: hidden;
      transition: var(--transition);
      cursor: pointer;
      position: relative;
    }

    .room-card:hover {
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
      transform: translateY(-5px);
      border-color: var(--gold);
    }

    .room-card img {
      width: 100%;
      height: 280px;
      object-fit: cover;
      display: block;
      transition: var(--transition);
    }

    .room-card:hover img {
      transform: scale(1.08);
    }

    .room-tag {
      position: absolute;
      top: 16px;
      right: 0;
      background: var(--gold);
      color: #fff;
      font-size: 10px;
      letter-spacing: 2px;
      text-transform: uppercase;
      padding: 6px 16px;
      font-weight: 500;
    }

    .room-info {
      padding: 28px;
    }

    .room-name {
      font-family: 'Playfair Display', serif;
      font-size: 20px;
      font-weight: 600;
      color: var(--dark);
      margin-bottom: 8px;
    }

    .room-price {
      font-size: 11px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: var(--gold);
      font-weight: 500;
      margin-bottom: 12px;
    }

    .room-desc {
      font-size: 14px;
      color: var(--stone);
      line-height: 1.7;
    }

    /* ============================================
       EVENTS SECTION
       ============================================ */
    .events-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2px;
      margin-top: 60px;
    }

    .event-card {
      position: relative;
      overflow: hidden;
      background: var(--dark2);
      height: 300px;
      cursor: pointer;
      transition: var(--transition);
    }

    .event-card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      opacity: 0.6;
      transition: var(--transition);
    }

    .event-card:hover img {
      opacity: 0.3;
      transform: scale(1.06);
    }

    .event-overlay {
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      padding: 24px;
      background: linear-gradient(
        to top,
        rgba(10, 8, 3, 0.9) 0%,
        transparent 100%
      );
    }

    .event-icon {
      font-size: 32px;
      margin-bottom: 12px;
      transition: var(--transition);
    }

    .event-card:hover .event-icon {
      transform: scale(1.2);
    }

    .event-name {
      font-family: 'Playfair Display', serif;
      font-size: 18px;
      color: #fff;
      font-weight: 600;
      text-align: center;
    }

    .event-desc {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.6);
      text-align: center;
      margin-top: 8px;
      line-height: 1.5;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.4s ease;
    }

    .event-card:hover .event-desc {
      max-height: 60px;
    }

    /* ============================================
       BANQUET SECTION
       ============================================ */
    .banquet-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0;
      align-items: stretch;
    }

    .banquet-img {
      position: relative;
      overflow: hidden;
      height: 600px;
    }

    .banquet-img img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: var(--transition);
    }

    .banquet-img:hover img {
      transform: scale(1.04);
    }

    .banquet-content {
      padding: 80px 60px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .banquet-content p {
      font-size: 16px;
      line-height: 1.85;
      color: var(--stone);
      margin: 20px 0 28px;
    }

    .banquet-list {
      list-style: none;
      margin-top: 28px;
    }

    .banquet-list li {
      padding: 12px 0;
      border-bottom: 1px solid var(--mist);
      font-size: 14px;
      color: var(--stone);
      display: flex;
      align-items: center;
      gap: 12px;
      transition: var(--transition);
    }

    .banquet-list li:hover {
      color: var(--dark);
      padding-left: 8px;
    }

    .banquet-list li::before {
      content: '◆';
      color: var(--gold);
      font-size: 8px;
      flex-shrink: 0;
    }

    @media (max-width: 1024px) {
      .banquet-grid {
        grid-template-columns: 1fr;
      }

      .banquet-img {
        height: 400px;
      }

      .banquet-content {
        padding: 60px 40px;
      }
    }

    /* ============================================
       PACKAGES SECTION
       ============================================ */
    .packages-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 28px;
      margin-top: 60px;
    }

    .pkg-card {
      border: 1px solid var(--mist);
      padding: 40px 32px;
      position: relative;
      transition: var(--transition);
      border-radius: 8px;
      background: #fff;
    }

    .pkg-card:hover {
      border-color: var(--gold);
      transform: translateY(-4px);
      box-shadow: 0 20px 60px rgba(200, 151, 58, 0.1);
    }

    .pkg-card.featured {
      background: var(--dark);
      border-color: var(--gold);
    }

    .pkg-badge {
      position: absolute;
      top: -12px;
      right: 24px;
      background: var(--gold);
      color: #fff;
      font-size: 9px;
      letter-spacing: 2px;
      text-transform: uppercase;
      padding: 6px 16px;
      font-weight: 600;
    }

    .pkg-icon {
      font-size: 36px;
      margin-bottom: 16px;
      display: block;
    }

    .pkg-name {
      font-family: 'Playfair Display', serif;
      font-size: 22px;
      font-weight: 600;
      color: var(--dark);
      margin-bottom: 8px;
    }

    .pkg-card.featured .pkg-name {
      color: #fff;
    }

    .pkg-price {
      font-size: 28px;
      font-weight: 500;
      color: var(--gold);
      font-family: 'Playfair Display', serif;
      margin-bottom: 4px;
    }

    .pkg-per {
      font-size: 11px;
      color: var(--stone);
      letter-spacing: 1px;
      margin-bottom: 24px;
    }

    .pkg-card.featured .pkg-per {
      color: rgba(255, 255, 255, 0.5);
    }

    .pkg-features {
      list-style: none;
      margin: 24px 0 32px;
    }

    .pkg-features li {
      font-size: 13px;
      color: var(--stone);
      padding: 8px 0;
      border-bottom: 1px solid var(--mist);
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .pkg-card.featured .pkg-features li {
      color: rgba(255, 255, 255, 0.7);
      border-color: rgba(255, 255, 255, 0.1);
    }

    .pkg-features li::before {
      content: '✓';
      color: var(--gold);
      font-weight: 600;
      flex-shrink: 0;
    }

    /* ============================================
       GALLERY SECTION
       ============================================ */
    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: 300px 300px;
      gap: 12px;
      margin-top: 60px;
    }

    .gallery-item {
      overflow: hidden;
      position: relative;
      cursor: pointer;
      border-radius: 8px;
    }

    .gallery-item:first-child {
      grid-column: span 2;
      grid-row: span 2;
    }

    .gallery-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: var(--transition);
      filter: brightness(0.85);
    }

    .gallery-item:hover img {
      transform: scale(1.08);
      filter: brightness(1);
    }

    .gallery-overlay {
      position: absolute;
      inset: 0;
      background: rgba(10, 8, 3, 0);
      transition: var(--transition);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .gallery-item:hover .gallery-overlay {
      background: rgba(200, 151, 58, 0.15);
    }

    .gallery-zoom {
      color: #fff;
      font-size: 24px;
      opacity: 0;
      transition: var(--transition);
      background: rgba(200, 151, 58, 0.8);
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .gallery-item:hover .gallery-zoom {
      opacity: 1;
    }

    @media (max-width: 1024px) {
      .gallery-grid {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
        gap: 12px;
      }

      .gallery-item:first-child {
        grid-column: span 1;
        grid-row: span 1;
      }
    }

    @media (max-width: 768px) {
      .gallery-grid {
        grid-template-columns: 1fr;
        gap: 12px;
      }
    }

    /* ============================================
       REVIEWS SECTION
       ============================================ */
    .reviews-meta {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 40px;
      margin: 60px 0;
      flex-wrap: wrap;
    }

    .review-platform {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px 28px;
      background: #fff;
      border: 1px solid var(--mist);
      border-radius: 8px;
    }

    .rev-score {
      font-family: 'Playfair Display', serif;
      font-size: 36px;
      font-weight: 600;
      color: var(--gold);
    }

    .rev-info strong {
      display: block;
      font-size: 12px;
      font-weight: 600;
      color: var(--dark);
    }

    .rev-info span {
      font-size: 11px;
      color: var(--stone);
    }

    .stars {
      color: var(--gold);
      font-size: 14px;
      letter-spacing: 1px;
    }

    .reviews-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 28px;
      margin-top: 60px;
    }

    .review-card {
      background: #fff;
      padding: 32px;
      border: 1px solid var(--mist);
      transition: var(--transition);
      position: relative;
      border-radius: 8px;
    }

    .review-card:hover {
      border-color: var(--gold);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.06);
    }

    .review-card::before {
      content: '"';
      font-family: 'Playfair Display', serif;
      font-size: 80px;
      color: var(--gold2);
      line-height: 0.7;
      opacity: 0.4;
      position: absolute;
      top: 16px;
      left: 20px;
    }

    .review-text {
      font-size: 14px;
      line-height: 1.8;
      color: var(--stone);
      margin-bottom: 20px;
      position: relative;
      z-index: 1;
      padding-top: 20px;
    }

    .review-author {
      font-weight: 600;
      font-size: 13px;
      color: var(--dark);
    }

    .review-via {
      font-size: 11px;
      color: var(--stone);
      letter-spacing: 0.5px;
      margin-top: 4px;
    }

    /* ============================================
       BOOKING SECTION
       ============================================ */
    .booking-wrap {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 80px;
      align-items: start;
    }

    .booking-info {
      margin-right: 40px;
    }

    .booking-info .section-title {
      color: #fff;
    }

    .booking-info p {
      font-size: 15px;
      line-height: 1.85;
      color: rgba(255, 255, 255, 0.6);
      margin: 20px 0 40px;
    }

    .contact-items {
      display: flex;
      flex-direction: column;
      gap: 24px;
      margin-top: 40px;
    }

    .ci {
      display: flex;
      align-items: flex-start;
      gap: 16px;
    }

    .ci-icon {
      width: 44px;
      height: 44px;
      background: rgba(200, 151, 58, 0.15);
      border: 1px solid var(--gold);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      flex-shrink: 0;
      border-radius: 4px;
    }

    .ci-text strong {
      display: block;
      font-size: 12px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: var(--gold);
      margin-bottom: 4px;
      font-weight: 600;
    }

    .ci-text span {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.7);
      line-height: 1.6;
    }

    .booking-form-wrap {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
      padding: 48px;
      border-radius: 8px;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-bottom: 24px;
    }

    .form-field {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .form-field.full {
      grid-column: 1 / -1;
    }

    .form-field label {
      font-size: 11px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.6);
      font-weight: 500;
    }

    .form-field input,
    .form-field select,
    .form-field textarea {
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #fff;
      padding: 14px 16px;
      font-family: 'DM Sans', sans-serif;
      font-size: 14px;
      border-radius: 4px;
      transition: var(--transition);
    }

    .form-field input:focus,
    .form-field select:focus,
    .form-field textarea:focus {
      border-color: var(--gold);
      background: rgba(200, 151, 58, 0.06);
      outline: none;
    }

    .form-field input::placeholder,
    .form-field textarea::placeholder {
      color: rgba(255, 255, 255, 0.25);
    }

    .form-field select option {
      background: var(--dark2);
      color: #fff;
    }

    .form-field textarea {
      resize: vertical;
      min-height: 120px;
    }

    .wa-book {
      background: var(--wa);
      color: #fff;
      padding: 16px 40px;
      font-size: 12px;
      letter-spacing: 2px;
      text-transform: uppercase;
      font-weight: 500;
      font-family: 'DM Sans', sans-serif;
      border: none;
      cursor: pointer;
      border-radius: 2px;
      transition: var(--transition);
      width: 100%;
      box-shadow: 0 4px 15px rgba(37, 211, 102, 0.2);
    }

    .wa-book:hover {
      background: #1ebe5a;
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(37, 211, 102, 0.3);
    }

    .form-note {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.3);
      text-align: center;
      margin-top: 16px;
    }

    @media (max-width: 1024px) {
      .booking-wrap {
        grid-template-columns: 1fr;
        gap: 60px;
      }

      .booking-info {
        margin-right: 0;
      }

      .form-row {
        grid-template-columns: 1fr;
      }
    }

    /* ============================================
       LOCATION SECTION
       ============================================ */
    .location-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0;
      border-radius: 8px;
      overflow: hidden;
    }

    .loc-info {
      padding: 80px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .loc-info .section-title {
      color: #fff;
    }

    .loc-details {
      margin-top: 48px;
      display: flex;
      flex-direction: column;
      gap: 32px;
    }

    .ld {
      display: flex;
      gap: 16px;
      align-items: flex-start;
    }

    .ld-icon {
      font-size: 24px;
      margin-top: 2px;
    }

    .ld strong {
      display: block;
      font-size: 11px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: var(--gold);
      margin-bottom: 6px;
      font-weight: 600;
    }

    .ld span {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.7);
      line-height: 1.7;
    }

    .loc-map {
      position: relative;
      overflow: hidden;
    }

    .loc-map iframe {
      width: 100%;
      height: 100%;
      min-height: 500px;
      border: none;
      filter: grayscale(0.4) contrast(1.1);
    }

    @media (max-width: 1024px) {
      .location-grid {
        grid-template-columns: 1fr;
      }

      .loc-info {
        padding: 60px 40px;
      }
    }

    /* ============================================
       FOOTER
       ============================================ */
    footer {
      background: var(--dark);
      border-top: 1px solid rgba(200, 151, 58, 0.2);
      padding: 80px 0 40px;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 60px;
      margin-bottom: 60px;
      max-width: 1400px;
      margin-left: auto;
      margin-right: auto;
      padding: 0 50px;
    }

    .foot-logo {
      font-family: 'Playfair Display', serif;
      font-size: 24px;
      color: #fff;
      margin-bottom: 16px;
      display: block;
      font-weight: 700;
    }

    .foot-logo span {
      color: var(--gold);
    }

    .foot-desc {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.5);
      line-height: 1.8;
    }

    .foot-socials {
      display: flex;
      gap: 12px;
      margin-top: 24px;
    }

    .foot-social {
      width: 40px;
      height: 40px;
      border: 1px solid rgba(255, 255, 255, 0.15);
      color: rgba(255, 255, 255, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      font-size: 16px;
      transition: var(--transition);
      border-radius: 4px;
    }

    .foot-social:hover {
      border-color: var(--gold);
      color: var(--gold);
      background: rgba(200, 151, 58, 0.1);
    }

    .foot-heading {
      font-size: 10px;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: var(--gold);
      margin-bottom: 20px;
      display: block;
      font-weight: 600;
    }

    .foot-links {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .foot-links a {
      color: rgba(255, 255, 255, 0.5);
      text-decoration: none;
      font-size: 14px;
      transition: var(--transition);
    }

    .foot-links a:hover {
      color: var(--gold);
      padding-left: 4px;
    }

    .foot-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      padding: 28px 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
      max-width: 1400px;
      margin: 0 auto;
    }

    .foot-bottom span {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.3);
    }

    .foot-bottom a {
      color: var(--gold);
      text-decoration: none;
      transition: var(--transition);
    }

    .foot-bottom a:hover {
      color: var(--gold2);
    }

    @media (max-width: 1024px) {
      .footer-grid {
        grid-template-columns: 1fr 1fr;
        gap: 40px;
        padding: 0 40px;
      }

      .foot-bottom {
        padding: 28px 40px;
      }
    }

    @media (max-width: 768px) {
      .footer-grid {
        grid-template-columns: 1fr;
        gap: 40px;
        padding: 0 25px;
      }

      .foot-bottom {
        padding: 28px 25px;
        flex-direction: column;
        text-align: center;
      }
    }

    /* ============================================
       ANIMATIONS
       ============================================ */
    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(28px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes bounce {
      0%,
      100% {
        transform: translateX(-50%) translateY(0);
      }
      50% {
        transform: translateX(-50%) translateY(8px);
      }
    }

    .reveal {
      opacity: 0;
      transform: translateY(32px);
      transition: opacity 0.7s ease, transform 0.7s ease;
    }

    .reveal.visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* ============================================
       FLOATING WHATSAPP
       ============================================ */
    #wa-float {
      position: fixed;
      bottom: 28px;
      right: 28px;
      z-index: 998;
      width: 56px;
      height: 56px;
      background: var(--wa);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 26px;
      text-decoration: none;
      box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
      animation: bounce 2s infinite;
      transition: var(--transition);
    }

    #wa-float:hover {
      box-shadow: 0 8px 30px rgba(37, 211, 102, 0.6);
      transform: scale(1.1);
    }

    @media (max-width: 480px) {
      #wa-float {
        width: 48px;
        height: 48px;
        font-size: 20px;
      }
    }

    /* ============================================
       RESPONSIVE
       ============================================ */
    @media (max-width: 480px) {
      .section {
        padding: 70px 0;
      }

      .hero-btns {
        flex-direction: column;
      }

      .btn-gold,
      .btn-ghost {
        width: 100%;
      }

      .contact-items {
        gap: 16px;
      }

      .booking-form-wrap {
        padding: 32px 24px;
      }
    }
  </style>
</head>
<body>
  <!-- NAVIGATION -->
  <nav id="nav">
    <div class="nav-container">
      <a class="nav-logo" href="#home">Golden <span>Petals</span></a>
      <ul class="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#rooms">Rooms</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#banquet">Banquet</a></li>
        <li><a href="#gallery">Gallery</a></li>
      </ul>
      <a href="https://wa.me/919266271835" target="_blank" rel="noopener noreferrer" class="nav-wa">
        💬 Book Now
      </a>
    </div>
  </nav>

  <!-- HERO SECTION -->
  <section id="hero">
    <div class="hero-img"></div>
    <div class="hero-overlay"></div>
    <div class="hero-inner">
      <div class="hero-tag">Greater Noida · Gaur City 1</div>
      <h1>Hotel Golden <br><em>Petals</em></h1>
      <p class="hero-sub">Premium Stays & Banquets</p>
      <div class="hero-btns">
        <a href="#rooms" class="btn-gold">Book Your Stay</a>
        <a href="#banquet" class="btn-ghost">Explore Banquet</a>
      </div>
    </div>
    <div class="hero-scroll">
      <div class="hero-scroll-line"></div>
      <span>Scroll</span>
    </div>
  </section>

  <!-- STATS STRIP -->
  <div class="stats-strip">
    <div class="stat-item">
      <span class="stat-n">42</span>
      <span class="stat-l">Premium Rooms</span>
    </div>
    <div class="stat-item">
      <span class="stat-n">350</span>
      <span class="stat-l">Guest Capacity</span>
    </div>
    <div class="stat-item">
      <span class="stat-n">4.1★</span>
      <span class="stat-l">Rating</span>
    </div>
    <div class="stat-item">
      <span class="stat-n">24/7</span>
      <span class="stat-l">Room Service</span>
    </div>
  </div>

  <!-- ABOUT SECTION -->
  <section id="about" class="section section-light">
    <div class="container">
      <div class="about-grid">
        <div>
          <span class="section-tag">Our Story</span>
          <h2 class="section-title">Where Every Stay Becomes a <em>Memory</em></h2>
          <p class="section-desc">Hotel Golden Petals & Banquets is a premier destination nestled in the heart of Gaur City 1, Greater Noida. We are more than just a hotel — we are a one-stop destination for exceptional hospitality experiences.</p>
          <p class="section-desc">Whether you are visiting for business or leisure, hosting a wedding, or celebrating life's milestones, our team is dedicated to delivering warmth, comfort, and gracious hospitality.</p>
          <a href="#booking" class="btn-gold" style="margin-top: 28px;">Enquire Now</a>
        </div>
        <div class="about-img-wrap">
          <img class="about-img-main" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80" alt="Hotel Golden Petals">
          <div class="about-corner"></div>
          <div class="about-badge">5★<small>Hospitality</small></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ROOMS SECTION -->
  <section id="rooms" class="section section-light">
    <div class="container">
      <span class="section-tag">Accommodation</span>
      <h2 class="section-title">Our <em>Rooms & Suites</em></h2>
      <div class="rooms-grid">
        <div class="room-card">
          <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80" alt="Deluxe Room">
          <div class="room-info">
            <div class="room-name">Deluxe Room</div>
            <div class="room-price">Starting ₹2,000 / night</div>
            <div class="room-desc">Comfortable, well-appointed rooms with modern amenities, AC, LED TV, free Wi-Fi and daily housekeeping.</div>
          </div>
        </div>
        <div class="room-card">
          <div class="room-tag">Popular</div>
          <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80" alt="Super Deluxe Room">
          <div class="room-info">
            <div class="room-name">Super Deluxe Room</div>
            <div class="room-price">Starting ₹2,800 / night</div>
            <div class="room-desc">Spacious rooms with upgraded interiors, premium bedding, mini-fridge and stunning city views.</div>
          </div>
        </div>
        <div class="room-card">
          <img src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80" alt="Executive Suite">
          <div class="room-info">
            <div class="room-name">Executive Suite</div>
            <div class="room-price">Starting ₹4,500 / night</div>
            <div class="room-desc">Our finest suites with separate living area, premium toiletries, priority service and exclusive amenities.</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- EVENTS SECTION -->
  <section id="events" class="section section-dark">
    <div class="container">
      <span class="section-tag" style="color: var(--gold2);">Celebrations</span>
      <h2 class="section-title">Every Occasion, <em style="color: var(--gold2);">Perfectly Crafted</em></h2>
      <div class="events-grid">
        <div class="event-card">
          <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80" alt="Wedding">
          <div class="event-overlay">
            <span class="event-icon">💍</span>
            <div class="event-name">Weddings</div>
            <div class="event-desc">Grand celebrations with décor, catering & coordination</div>
          </div>
        </div>
        <div class="event-card">
          <img src="https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=600&q=80" alt="Birthday">
          <div class="event-overlay">
            <span class="event-icon">🎂</span>
            <div class="event-name">Birthday Party</div>
            <div class="event-desc">Make every birthday truly memorable and special</div>
          </div>
        </div>
        <div class="event-card">
          <img src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80" alt="Anniversary">
          <div class="event-overlay">
            <span class="event-icon">💞</span>
            <div class="event-name">Anniversary</div>
            <div class="event-desc">Celebrate togetherness in beautiful settings</div>
          </div>
        </div>
        <div class="event-card">
          <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80" alt="Ring Ceremony">
          <div class="event-overlay">
            <span class="event-icon">💎</span>
            <div class="event-name">Ring Ceremony</div>
            <div class="event-desc">Elegant ceremonies with floral décor & setup</div>
          </div>
        </div>
        <div class="event-card">
          <img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80" alt="Mehndi">
          <div class="event-overlay">
            <span class="event-icon">🌿</span>
            <div class="event-name">Mehndi Night</div>
            <div class="event-desc">Vibrant celebrations full of colour & joy</div>
          </div>
        </div>
        <div class="event-card">
          <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80" alt="Kitty Party">
          <div class="event-overlay">
            <span class="event-icon">🥂</span>
            <div class="event-name">Kitty Party</div>
            <div class="event-desc">Exclusive gatherings with curated menus</div>
          </div>
        </div>
        <div class="event-card">
          <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80" alt="Corporate">
          <div class="event-overlay">
            <span class="event-icon">💼</span>
            <div class="event-name">Corporate Events</div>
            <div class="event-desc">Conferences & seminars with AV support</div>
          </div>
        </div>
        <div class="event-card">
          <img src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80" alt="Custom Events">
          <div class="event-overlay">
            <span class="event-icon">✨</span>
            <div class="event-name">Custom Events</div>
            <div class="event-desc">Baby showers, ceremonies & celebrations</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- BANQUET SECTION -->
  <section id="banquet" class="section section-ivory">
    <div class="banquet-grid">
      <div class="banquet-img">
        <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80" alt="Banquet Hall">
      </div>
      <div class="banquet-content">
        <span class="section-tag">The Grand Hall</span>
        <h2 class="section-title">Banquet Hall for Every <em>Dream</em></h2>
        <p>Our banquet hall can accommodate up to 350 floating guests (200 seated), making it perfect for weddings, receptions, corporate events and all social gatherings.</p>
        <ul class="banquet-list">
          <li>Capacity: 200 seated · 350 floating</li>
          <li>In-house veg & non-veg catering (₹700–₹850/plate)</li>
          <li>Weddings, receptions & pre-wedding functions</li>
          <li>Corporate conferences & seminars</li>
          <li>Dedicated event planning & coordination</li>
          <li>Full AV setup, décor & floral arrangements</li>
          <li>Residential wedding packages available</li>
          <li>42 rooms for guests staying overnight</li>
        </ul>
        <a href="#booking" class="btn-gold" style="margin-top: 32px;">Get Banquet Quote</a>
      </div>
    </div>
  </section>

  <!-- PACKAGES SECTION -->
  <section id="packages" class="section section-light">
    <div class="container">
      <span class="section-tag">Pricing</span>
      <h2 class="section-title">Event <em>Packages</em></h2>
      <div class="packages-grid">
        <div class="pkg-card">
          <span class="pkg-icon">🥗</span>
          <div class="pkg-name">Veg Package</div>
          <div class="pkg-price">₹700 <span style="font-size: 16px;">/ plate</span></div>
          <div class="pkg-per">Taxes extra</div>
          <ul class="pkg-features">
            <li>Full vegetarian menu</li>
            <li>Welcome drinks</li>
            <li>Starter + Main Course</li>
            <li>Live counters available</li>
            <li>Basic décor included</li>
          </ul>
          <a href="#booking" class="btn-gold" style="display: block; text-align: center; width: 100%;">Enquire</a>
        </div>
        <div class="pkg-card featured">
          <span class="pkg-badge">Most Popular</span>
          <span class="pkg-icon">🎊</span>
          <div class="pkg-name">Grand Wedding</div>
          <div class="pkg-price">Custom</div>
          <div class="pkg-per">As per requirement</div>
          <ul class="pkg-features">
            <li>Full event coordination</li>
            <li>Décor & floral setup</li>
            <li>Veg + Non-veg catering</li>
            <li>AV & lighting setup</li>
            <li>42 rooms for guests</li>
            <li>Dedicated event manager</li>
          </ul>
          <a href="#booking" class="btn-gold" style="display: block; text-align: center; width: 100%;">Get Quote</a>
        </div>
        <div class="pkg-card">
          <span class="pkg-icon">🍖</span>
          <div class="pkg-name">Non-Veg Package</div>
          <div class="pkg-price">₹850 <span style="font-size: 16px;">/ plate</span></div>
          <div class="pkg-per">Taxes extra</div>
          <ul class="pkg-features">
            <li>Full non-veg menu</li>
            <li>Welcome drinks</li>
            <li>Starter + Main Course</li>
            <li>Dessert counter</li>
            <li>Basic décor included</li>
          </ul>
          <a href="#booking" class="btn-gold" style="display: block; text-align: center; width: 100%;">Enquire</a>
        </div>
      </div>
    </div>
  </section>

  <!-- GALLERY SECTION -->
  <section id="gallery" class="section section-dark">
    <div class="container">
      <span class="section-tag" style="color: var(--gold2);">Visual Tour</span>
      <h2 class="section-title">A Glimpse of <em style="color: var(--gold2);">Golden Petals</em></h2>
      <div class="gallery-grid">
        <div class="gallery-item">
          <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80" alt="Hotel Exterior">
          <div class="gallery-overlay"><span class="gallery-zoom">⊕</span></div>
        </div>
        <div class="gallery-item">
          <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80" alt="Room">
          <div class="gallery-overlay"><span class="gallery-zoom">⊕</span></div>
        </div>
        <div class="gallery-item">
          <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=80" alt="Banquet">
          <div class="gallery-overlay"><span class="gallery-zoom">⊕</span></div>
        </div>
        <div class="gallery-item">
          <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80" alt="Restaurant">
          <div class="gallery-overlay"><span class="gallery-zoom">⊕</span></div>
        </div>
        <div class="gallery-item">
          <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80" alt="Wedding">
          <div class="gallery-overlay"><span class="gallery-zoom">⊕</span></div>
        </div>
        <div class="gallery-item">
          <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80" alt="Lobby">
          <div class="gallery-overlay"><span class="gallery-zoom">⊕</span></div>
        </div>
      </div>
    </div>
  </section>

  <!-- REVIEWS SECTION -->
  <section id="reviews" class="section section-ivory">
    <div class="container">
      <span class="section-tag">Guest Voices</span>
      <h2 class="section-title">What Our Guests <em>Say</em></h2>
      <div class="reviews-meta">
        <div class="review-platform">
          <div class="rev-score">4.1</div>
          <div class="rev-info">
            <div class="stars">★★★★☆</div>
            <strong>JustDial</strong>
            <span>448 Reviews</span>
          </div>
        </div>
        <div class="review-platform">
          <div class="rev-score">5.0</div>
          <div class="rev-info">
            <div class="stars">★★★★★</div>
            <strong>WedMeGood</strong>
            <span>Verified Reviews</span>
          </div>
        </div>
        <div class="review-platform">
          <div class="rev-score">4.3</div>
          <div class="rev-info">
            <div class="stars">★★★★☆</div>
            <strong>Google</strong>
            <span>Guest Reviews</span>
          </div>
        </div>
      </div>
      <div class="reviews-grid">
        <div class="review-card">
          <div class="stars">★★★★★</div>
          <p class="review-text">"The banquet hall was beautifully decorated for our reception. The team handled every detail with dedication. Food was excellent and all our guests were impressed."</p>
          <div class="review-author">Priya & Arjun S.</div>
          <div class="review-via">Verified · Wedding Reception</div>
        </div>
        <div class="review-card">
          <div class="stars">★★★★★</div>
          <p class="review-text">"Stayed for 3 nights during a family event. Rooms are spacious, clean and well-maintained. Staff is warm and professional. Room service was prompt."</p>
          <div class="review-author">Rahul Mehta</div>
          <div class="review-via">Verified Stay · Google</div>
        </div>
        <div class="review-card">
          <div class="stars">★★★★☆</div>
          <p class="review-text">"Hosted our son's birthday party here. Huge success! Team set everything beautifully, catering was amazing and the hall looked stunning."</p>
          <div class="review-author">Sunita Kapoor</div>
          <div class="review-via">Verified · Birthday Event</div>
        </div>
        <div class="review-card">
          <div class="stars">★★★★★</div>
          <p class="review-text">"Booked for a corporate seminar. AV setup was perfect, food was great, staff was cooperative. Location is very convenient."</p>
          <div class="review-author">Vineet Sharma</div>
          <div class="review-via">Verified · Corporate Event</div>
        </div>
        <div class="review-card">
          <div class="stars">★★★★★</div>
          <p class="review-text">"Wedding package was comprehensive and reasonably priced. In-house décor team did phenomenal work. All 42 rooms booked perfectly for our family."</p>
          <div class="review-author">Anjali & Rohan Verma</div>
          <div class="review-via">Verified · Residential Wedding</div>
        </div>
        <div class="review-card">
          <div class="stars">★★★★☆</div>
          <p class="review-text">"Came for kitty party with 20 friends. Private setup was lovely, food delicious and staff very attentive. Hall décor was beautiful."</p>
          <div class="review-author">Neha Agarwal</div>
          <div class="review-via">Verified · Kitty Party</div>
        </div>
      </div>
    </div>
  </section>

  <!-- BOOKING SECTION -->
  <section id="booking" class="section section-dark">
    <div class="container">
      <div class="booking-wrap">
        <div class="booking-info">
          <span class="section-tag" style="color: var(--gold2);">Reservations</span>
          <h2 class="section-title">Book Your Stay or <em style="color: var(--gold2);">Event</em></h2>
          <p>Fill in the form and our team will contact you within 2 hours. For urgent enquiries, reach us directly on WhatsApp.</p>
          <div class="contact-items">
            <div class="ci">
              <div class="ci-icon">📞</div>
              <div class="ci-text">
                <strong>Phone / WhatsApp</strong>
                <span>+91 92662 71835</span>
              </div>
            </div>
            <div class="ci">
              <div class="ci-icon">📍</div>
              <div class="ci-text">
                <strong>Address</strong>
                <span>Cherry County, Gate No. 2<br>Gaur City 1, Greater Noida – 201318, U.P.</span>
              </div>
            </div>
            <div class="ci">
              <div class="ci-icon">📸</div>
              <div class="ci-text">
                <strong>Instagram</strong>
                <span>@goldenpetals.in</span>
              </div>
            </div>
            <div class="ci">
              <div class="ci-icon">🕐</div>
              <div class="ci-text">
                <strong>Check-In / Check-Out</strong>
                <span>Check-in: 12:00 PM | Check-out: 11:00 AM</span>
              </div>
            </div>
          </div>
        </div>
        <div class="booking-form-wrap">
          <div class="form-row">
            <div class="form-field">
              <label>Your Name</label>
              <input type="text" placeholder="Full Name" required>
            </div>
            <div class="form-field">
              <label>Phone Number</label>
              <input type="tel" placeholder="+91 XXXXX XXXXX" required>
            </div>
          </div>
          <div class="form-row">
            <div class="form-field">
              <label>Enquiry Type</label>
              <select required>
                <option value="">Select Type</option>
                <option>Room Booking</option>
                <option>Wedding / Reception</option>
                <option>Birthday Party</option>
                <option>Ring Ceremony</option>
                <option>Anniversary</option>
                <option>Corporate Event</option>
                <option>Other Event</option>
              </select>
            </div>
            <div class="form-field">
              <label>Expected Date</label>
              <input type="date" required>
            </div>
          </div>
          <div class="form-row">
            <div class="form-field">
              <label>No. of Guests</label>
              <select required>
                <option>1–20 Guests</option>
                <option>20–50 Guests</option>
                <option>50–100 Guests</option>
                <option>100–200 Guests</option>
                <option>200–350 Guests</option>
                <option>350+ Guests</option>
              </select>
            </div>
            <div class="form-field">
              <label>Budget Range</label>
              <select required>
                <option>Below ₹50,000</option>
                <option>₹50,000 – ₹1,00,000</option>
                <option>₹1,00,000 – ₹3,00,000</option>
                <option>₹3,00,000 – ₹5,00,000</option>
                <option>Above ₹5,00,000</option>
              </select>
            </div>
          </div>
          <div class="form-field full">
            <label>Message / Special Requirements</label>
            <textarea placeholder="Tell us more about your requirements..."></textarea>
          </div>
          <button class="wa-book" onclick="window.open('https://wa.me/919266271835', '_blank')">
            💬 Send Enquiry via WhatsApp
          </button>
          <p class="form-note">We respond within 2 hours · Available 9 AM – 10 PM</p>
        </div>
      </div>
    </div>
  </section>

  <!-- LOCATION SECTION -->
  <section id="location" class="section section-dark">
    <div class="location-grid">
      <div class="loc-info">
        <span class="section-tag" style="color: var(--gold2);">Find Us</span>
        <h2 class="section-title">Perfectly <em style="color: var(--gold2);">Located</em></h2>
        <div class="loc-details">
          <div class="ld">
            <span class="ld-icon">📍</span>
            <div>
              <strong>Address</strong>
              <span>Cherry County, Gate No. 2<br>Gaur City 1, Greater Noida – 201318, U.P.</span>
            </div>
          </div>
          <div class="ld">
            <span class="ld-icon">🚗</span>
            <div>
              <strong>Connectivity</strong>
              <span>35 km from IGI Airport · 25 km from Railway Station · Well-connected via Expressway</span>
            </div>
          </div>
          <div class="ld">
            <span class="ld-icon">🏙️</span>
            <div>
              <strong>Nearby</strong>
              <span>Gaur City Mall · Pari Chowk · India Expo Centre · Sector 18</span>
            </div>
          </div>
        </div>
        <a href="https://maps.google.com/?q=Hotel+Golden+Petals+Gaur+City+1" target="_blank" rel="noopener noreferrer" class="btn-gold" style="margin-top: 32px;">Open in Google Maps ↗</a>
      </div>
      <div class="loc-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.0!2d77.4458235!3d28.6019505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef000fd6097f%3A0xb51fb9dc9ea19650!2sHotel%20Golden%20Petals%20%26%20Banquets" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </section>

  <!-- FLOATING WHATSAPP -->
  <a href="https://wa.me/919266271835" target="_blank" rel="noopener noreferrer" id="wa-float" title="Chat on WhatsApp">💬</a>

  <!-- FOOTER -->
  <footer>
    <div class="footer-grid">
      <div>
        <span class="foot-logo">Golden <span>Petals</span></span>
        <p class="foot-desc">A premier hotel and banquet destination in the heart of Gaur City 1, Greater Noida. Experience warmth, comfort, and gracious hospitality.</p>
        <div class="foot-socials">
          <a class="foot-social" href="https://www.instagram.com/goldenpetals.in" target="_blank" rel="noopener noreferrer">📸</a>
          <a class="foot-social" href="https://wa.me/919266271835" target="_blank" rel="noopener noreferrer">💬</a>
          <a class="foot-social" href="tel:+919266271835">📞</a>
        </div>
      </div>
      <div>
        <span class="foot-heading">Quick Links</span>
        <ul class="foot-links">
          <li><a href="#about">About Us</a></li>
          <li><a href="#rooms">Rooms & Suites</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#banquet">Banquet Hall</a></li>
          <li><a href="#gallery">Gallery</a></li>
        </ul>
      </div>
      <div>
        <span class="foot-heading">Events We Host</span>
        <ul class="foot-links">
          <li><a href="#booking">Weddings & Receptions</a></li>
          <li><a href="#booking">Birthday Parties</a></li>
          <li><a href="#booking">Ring Ceremony</a></li>
          <li><a href="#booking">Mehndi Functions</a></li>
          <li><a href="#booking">Corporate Events</a></li>
        </ul>
      </div>
      <div>
        <span class="foot-heading">Contact</span>
        <ul class="foot-links">
          <li><a href="tel:+919266271835">+91 92662 71835</a></li>
          <li><a href="https://wa.me/919266271835" target="_blank" rel="noopener noreferrer">WhatsApp Us</a></li>
          <li><a href="https://www.instagram.com/goldenpetals.in" target="_blank" rel="noopener noreferrer">@goldenpetals.in</a></li>
          <li style="color: rgba(255,255,255,.4); font-size: 13px; padding-top: 6px;">Cherry County, Gate 2<br>Gaur City 1, Greater Noida, U.P.</li>
        </ul>
      </div>
    </div>
    <div class="foot-bottom">
      <span>© 2025 Hotel Golden Petals & Banquets. All rights reserved.</span>
      <span>Made with ♥ in Greater Noida · <a href="https://wa.me/919266271835">Contact Us</a></span>
    </div>
  </footer>

  <!-- SCRIPTS -->
  <script>
    // Navigation scroll effect
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });

    // Reveal animation on scroll
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach(reveal => observer.observe(reveal));
  </script>
</body>
</html>
