/**
 * User: ignatov
 * Date: 21.02.2011
 */

String.prototype.replaceAll = function(searchValue, replaceValue) {
  var temp = this;
  var index = temp.indexOf(searchValue);
  while (index != -1) {
    temp = temp.replace(searchValue, replaceValue);
    index = temp.indexOf(searchValue);
  }
  return temp;
};

function median(a) {
  var ary = a.slice();
  var length = ary.length;
  switch (length) {
    case 0:
      return [];
    case 3:
      return median3(ary);
    case 5:
      return median5(ary);
    case 7:
      return median7(ary);
    case 9:
      return median9(ary);
    case 25:
      return median25(ary);
    default:
      ary.sort(function (a, b) {
        return a - b
      });
      var mid = Math.floor(length / 2);
      if ((length % 2) == 1)
        return ary[mid];
      else
        return (ary[mid - 1] + ary[mid]) / 2;
  }
};

function pixSort(p, a, b) {
  if (p[a] > p[b]) {
    var temp = p[a];
    p[a] = p[b];
    p[b] = temp;
  }
}

function median3(p) {
  pixSort(p, 0, 1);
  pixSort(p, 1, 2);
  pixSort(p, 0, 1);
  return(p[1]);
}

function median5(p) {
  pixSort(p, 0, 1);
  pixSort(p, 3, 4);
  pixSort(p, 0, 3);
  pixSort(p, 1, 4);
  pixSort(p, 1, 2);
  pixSort(p, 2, 3);
  pixSort(p, 1, 2);
  return(p[2]);
}

function median7(p) {
  pixSort(p, 0, 5);
  pixSort(p, 0, 3);
  pixSort(p, 1, 6);
  pixSort(p, 2, 4);
  pixSort(p, 0, 1);
  pixSort(p, 3, 5);
  pixSort(p, 2, 6);
  pixSort(p, 2, 3);
  pixSort(p, 3, 6);
  pixSort(p, 4, 5);
  pixSort(p, 1, 4);
  pixSort(p, 1, 3);
  pixSort(p, 3, 4);
  return (p[3]);
}

function median9(p) {
  pixSort(p, 1, 2);
  pixSort(p, 4, 5);
  pixSort(p, 7, 8);
  pixSort(p, 0, 1);
  pixSort(p, 3, 4);
  pixSort(p, 6, 7);
  pixSort(p, 1, 2);
  pixSort(p, 4, 5);
  pixSort(p, 7, 8);
  pixSort(p, 0, 3);
  pixSort(p, 5, 8);
  pixSort(p, 4, 7);
  pixSort(p, 3, 6);
  pixSort(p, 1, 4);
  pixSort(p, 2, 5);
  pixSort(p, 4, 7);
  pixSort(p, 4, 2);
  pixSort(p, 6, 4);
  pixSort(p, 4, 2);
  return p[4];
}

function median25(p) {
  pixSort(p, 0, 1);
  pixSort(p, 3, 4);
  pixSort(p, 2, 4);
  pixSort(p, 2, 3);
  pixSort(p, 6, 7);
  pixSort(p, 5, 7);
  pixSort(p, 5, 6);
  pixSort(p, 9, 10);
  pixSort(p, 8, 10);
  pixSort(p, 8, 9);
  pixSort(p, 12, 13);
  pixSort(p, 11, 13);
  pixSort(p, 11, 12);
  pixSort(p, 15, 16);
  pixSort(p, 14, 16);
  pixSort(p, 14, 15);
  pixSort(p, 18, 19);
  pixSort(p, 17, 19);
  pixSort(p, 17, 18);
  pixSort(p, 21, 22);
  pixSort(p, 20, 22);
  pixSort(p, 20, 21);
  pixSort(p, 23, 24);
  pixSort(p, 2, 5);
  pixSort(p, 3, 6);
  pixSort(p, 0, 6);
  pixSort(p, 0, 3);
  pixSort(p, 4, 7);
  pixSort(p, 1, 7);
  pixSort(p, 1, 4);
  pixSort(p, 11, 14);
  pixSort(p, 8, 14);
  pixSort(p, 8, 11);
  pixSort(p, 12, 15);
  pixSort(p, 9, 15);
  pixSort(p, 9, 12);
  pixSort(p, 13, 16);
  pixSort(p, 10, 16);
  pixSort(p, 10, 13);
  pixSort(p, 20, 23);
  pixSort(p, 17, 23);
  pixSort(p, 17, 20);
  pixSort(p, 21, 24);
  pixSort(p, 18, 24);
  pixSort(p, 18, 21);
  pixSort(p, 19, 22);
  pixSort(p, 8, 17);
  pixSort(p, 9, 18);
  pixSort(p, 0, 18);
  pixSort(p, 0, 9);
  pixSort(p, 10, 19);
  pixSort(p, 1, 19);
  pixSort(p, 1, 10);
  pixSort(p, 11, 20);
  pixSort(p, 2, 20);
  pixSort(p, 2, 11);
  pixSort(p, 12, 21);
  pixSort(p, 3, 21);
  pixSort(p, 3, 12);
  pixSort(p, 13, 22);
  pixSort(p, 4, 22);
  pixSort(p, 4, 13);
  pixSort(p, 14, 23);
  pixSort(p, 5, 23);
  pixSort(p, 5, 14);
  pixSort(p, 15, 24);
  pixSort(p, 6, 24);
  pixSort(p, 6, 15);
  pixSort(p, 7, 16);
  pixSort(p, 7, 19);
  pixSort(p, 13, 21);
  pixSort(p, 15, 23);
  pixSort(p, 7, 13);
  pixSort(p, 7, 15);
  pixSort(p, 1, 9);
  pixSort(p, 3, 11);
  pixSort(p, 5, 17);
  pixSort(p, 11, 17);
  pixSort(p, 9, 17);
  pixSort(p, 4, 10);
  pixSort(p, 6, 12);
  pixSort(p, 7, 14);
  pixSort(p, 4, 6);
  pixSort(p, 4, 7);
  pixSort(p, 12, 14);
  pixSort(p, 10, 14);
  pixSort(p, 6, 7);
  pixSort(p, 10, 12);
  pixSort(p, 6, 10);
  pixSort(p, 6, 17);
  pixSort(p, 12, 17);
  pixSort(p, 7, 17);
  pixSort(p, 7, 10);
  pixSort(p, 12, 18);
  pixSort(p, 7, 12);
  pixSort(p, 10, 18);
  pixSort(p, 12, 20);
  pixSort(p, 10, 20);
  pixSort(p, 10, 12);
  return p[12];
}