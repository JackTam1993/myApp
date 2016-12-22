# myApp
This project is to test the performance improvement that bindonce brings. And it just an ionic-init project.

OK,let us use Chinese.

在 https://github.com/Pasvaz/bindonce 中提到，当我们滥用Angular中方便的数据绑定的功能时，可能会导致一些性能问题。在我们的SPA中，Angular令我们很方便地实现视图和数据同步更新的功能，但是我们稍不小心就会导致加载过多watcher的情况，而当watcher的数量超过2000时很可能会导致页面的加载的滞后，而bind once提供了方法，以指令的方式去除视图中不需监视的的元素，从而提高页面的性能。由于ng-和bo-的指令基本上能够对应得上，所以使用起来也没有太大的难度，如果想定量地观察watcher的变化的话可以使用Chrome里面的Batarang工具。

下图为未使用bind once前的情况，当经过一段时间的操作后峰值能达到2800个watcher左右，而且产生的watcher会一直存留直到页面刷新才会被回收。
![image](https://github.com/JackTam1993/myApp/blob/master/img/1.png)

下图为使用bind once后的情况，可以发现一开始加载的watcher数大概只有原来的10分之1，在经过一段时间的操作后watcher数峰值大概为340个左右，而且会在达到峰值后回落。虽然优化效果也比较明显，但是与作者的说法还是不太一致，之后会继续参考作者的思路看看能不能做到作者所说的优化效果。
![image](https://github.com/JackTam1993/myApp/blob/master/img/2.png)

install dependencies : npm install & bower install & npm ionic cordova -g.

run on browser : ionic serve.

And this is a cordova based project, so you can build it in a cordova way.

Thank you for watching.
