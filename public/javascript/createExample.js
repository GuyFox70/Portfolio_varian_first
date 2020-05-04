(() => {
  const gallery = document.querySelector('.gallery');

  const gallery_item = document.createElement('div');
    gallery_item.classList.add('gallery-item');

    const border_screen = document.createElement('div');
      border_screen.classList.add('border-screen');

      const link = document.createElement('a');
        link.href = '#';

        const img = document.createElement('img');
          img.src = ''

        border_screen.appendChild(link);
    gallery_item.appendChild(border_screen);
  gallery.appendChild(gallery_item);
})()