const compareVersionNumber = (version1, version2) => {
  let vs1 = version1.split('.').map(el => parseInt(el))
  let vs2 = version2.split('.').map(el => parseInt(el))
  let n1, n2

  while (vs1.length || vs2.length) {
    n1 = vs1.shift() || 0
    n2 = vs2.shift() || 0
    if (n1 > n2) return 1
    else if (n1 < n2) return -1
  }
  return 0 
}