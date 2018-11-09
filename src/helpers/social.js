import swal from 'sweetalert2';

function openSocialShareLink(type, shareText, shareLink, shareHashtag) {
  let url = '';
  const title = encodeURIComponent(shareText);
  if (type === 'fb') {
    const link = encodeURIComponent(shareLink);
    url = `https://www.facebook.com/dialog/feed?app_id=301375193309601&redirect_uri=${link}&link=${link}&ref=responsive&name=${title}`;
  } else if (type === 'tw') {
    const text = encodeURIComponent(`${shareText} ${shareHashtag} ${shareLink}`);
    url = `https://twitter.com/intent/tweet?text=${text}`;
  } else if (type === 'mail') {
    // const text = `${shareText} ${shareLink}`;
    // url = `mailto:?subject=${title}&body=${text}`;
    swal({
      title: 'Kopiraj povezavo:',
      confirmButtonText: 'ZAPRI',
      confirmButtonClass: 'btn',
      buttonsStyling: false,
      html: `<input value="${shareLink}" class="form-control" spellcheck="false" onclick="this.select()" />`,
    });
    return;
  }
  window.open(url, '_blank');
}

export { openSocialShareLink };
