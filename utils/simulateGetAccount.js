export const SimulateGetAccount = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true
        if (success) {
          resolve(
            {
              name: 'Nabila Leksana Putri',
              balance: '13.582.000',
              poin: '3100',
              accountNumber: '1812345678'

            }
          )
        } else {
          reject('Error karena tidak berhasil')
        }
      }, 3600)
      
  })}