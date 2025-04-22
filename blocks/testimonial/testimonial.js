export default function decorate(block) {
  const rows = [...block.children];
  rows.forEach((row, index) => {
    row.classList.add('testimonial-row');
    const text = row.querySelector('p');
    if (text){
      if (index === 0) text.classList.add('testimonial-name');
      if (index === 1) text.classList.add('testimonial-title');
      if (index === 2) text.classList.add('testimonial-quote');
    }
  })
}