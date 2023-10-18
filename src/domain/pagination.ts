export type Props = {
  currentPage: number
  lastPage: number
  maxLength: number
}

export function getPaginationItems(
  currentPage: number,
  lastPage: number,
  maxLength: number
): number[] {
  const res: Array<number> = []

  if (maxLength >= lastPage) {
    for (let i = 1; i <= lastPage; i++) {
      res.push(i)
    }
  } else {
    // handle ellipsis logics

    const confirmedPages = 3
    const remainingLength = maxLength - confirmedPages
    const sideLength = remainingLength / 2

    if (currentPage < sideLength + 1 || lastPage < sideLength + currentPage) {
      for (let j = 1; j <= sideLength + 1; j++) {
        res.push(j)
      }

      res.push(NaN)

      for (let k = lastPage - sideLength; k <= lastPage; k++) {
        res.push(k)
      }
    } else if (
      currentPage > remainingLength &&
      lastPage - currentPage >= remainingLength
    ) {
      res.push(1)
      res.push(NaN)

      const remainingSideLength = sideLength - 1

      for (
        let i = currentPage - remainingSideLength;
        i <= currentPage + remainingSideLength;
        i++
      ) {
        res.push(i)
      }
      res.push(NaN)
      res.push(lastPage)
    } else {
      const ellipsisNearStart = lastPage - currentPage < currentPage - 1
      if (ellipsisNearStart) {
        for (let i = lastPage; i >= currentPage - 1; i--) {
          res.unshift(i)
        }
        res.unshift(NaN)

        const lengthStart = maxLength - res.length
        for (let j = lengthStart; j >= 1; j--) {
          res.unshift(j)
        }
      } else {
        for (let i = 1; i <= currentPage + 1; i++) {
          res.push(i)
        }
        res.push(NaN)
        const lengthEnd = maxLength - res.length
        for (let j = lastPage - lengthEnd + 1; j <= lastPage; j++) {
          res.push(j)
        }
      }
    }
  }

  return res
}
