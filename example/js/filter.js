/**
 * User: ignatov
 * Date: 21.02.2011
 */

function Filter(name, kernel, divider) {
  this.name = name;
  this.kernel = kernel;
  this.divider = divider;
  this.id = this.name.replaceAll(" ", "_").toLowerCase();
  this.save = function() {
    if (localStorage.getItem(this.id) == null) {
      localStorage.setItem(this.id, JSON.stringify(this));
      return true;
    }
    return false;
  }
}
