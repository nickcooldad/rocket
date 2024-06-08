function countFulfilledPromises(...args) {
  return Promise.allSettled(args).then(promis => promis
    .filter(item => item.status === 'fulfilled').length)
}