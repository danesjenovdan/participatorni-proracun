function openSocialShareLink(
  type,
  shareTitle,
  shareText,
  shareLink,
  shareHashtag
) {
  // TODO: add native share option
  let url = "";
  const title = encodeURIComponent(shareTitle);
  if (type === "fb") {
    const link = encodeURIComponent(shareLink);
    url = `https://www.facebook.com/dialog/feed?app_id=301375193309601&redirect_uri=${link}&link=${link}&ref=responsive&name=${title}`;
  } else if (type === "tw") {
    const text = encodeURIComponent(
      `${shareTitle} ${shareText} ${shareHashtag} ${shareLink}`
    );
    url = `https://twitter.com/intent/tweet?text=${text}`;
  } else if (type === "mail") {
    const text = `${shareText} ${shareLink}`;
    url = `mailto:?subject=${title}&body=${text}`;
  }
  window.open(url, "_blank");
}

export { openSocialShareLink };
