export function openMailto({name, email, message}){
  const subject = encodeURIComponent('Portfolio Contact from ' + name)
  const body = encodeURIComponent(message + '\n\nReply to: ' + email)
  window.location.href = `mailto:bharathsenthil567@gmail.com?subject=${subject}&body=${body}`
}
