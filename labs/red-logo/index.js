(function() {
    "use strict";
    var $$$utils$vec4$$GLMAT_ARRAY_TYPE = (typeof Float32Array !== "undefined") ? Float32Array : Array;
    var $$$utils$vec4$$GLMAT_RANDOM = Math.random;

    /**
     * @class 4 Dimensional Vector
     * @name vec4
     */
    var $$$utils$vec4$$vec4 = {};

    /**
     * Creates a new, empty vec4
     *
     * @returns {vec4} a new 4D vector
     */
    $$$utils$vec4$$vec4.create = function () {
      var out = new $$$utils$vec4$$GLMAT_ARRAY_TYPE(4);
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      return out;
    };

    /**
     * Creates a new vec4 initialized with values from an existing vector
     *
     * @param {vec4} a vector to clone
     * @returns {vec4} a new 4D vector
     */
    $$$utils$vec4$$vec4.clone = function (a) {
      var out = new $$$utils$vec4$$GLMAT_ARRAY_TYPE(4);
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      return out;
    };

    /**
     * Creates a new vec4 initialized with the given values
     *
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @param {Number} w W component
     * @returns {vec4} a new 4D vector
     */
    $$$utils$vec4$$vec4.fromValues = function (x, y, z, w) {
      var out = new $$$utils$vec4$$GLMAT_ARRAY_TYPE(4);
      out[0] = x;
      out[1] = y;
      out[2] = z;
      out[3] = w;
      return out;
    };

    /**
     * Copy the values from one vec4 to another
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the source vector
     * @returns {vec4} out
     */
    $$$utils$vec4$$vec4.copy = function (out, a) {
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      return out;
    };

    /**
     * Set the components of a vec4 to the given values
     *
     * @param {vec4} out the receiving vector
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @param {Number} w W component
     * @returns {vec4} out
     */
    $$$utils$vec4$$vec4.set = function (out, x, y, z, w) {
      out[0] = x;
      out[1] = y;
      out[2] = z;
      out[3] = w;
      return out;
    };

    /**
     * Adds two vec4's
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {vec4} out
     */
    $$$utils$vec4$$vec4.add = function (out, a, b) {
      out[0] = a[0] + b[0];
      out[1] = a[1] + b[1];
      out[2] = a[2] + b[2];
      out[3] = a[3] + b[3];
      return out;
    };

    /**
     * Subtracts vector b from vector a
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {vec4} out
     */
    $$$utils$vec4$$vec4.subtract = function (out, a, b) {
      out[0] = a[0] - b[0];
      out[1] = a[1] - b[1];
      out[2] = a[2] - b[2];
      out[3] = a[3] - b[3];
      return out;
    };

    /**
     * Alias for {@link vec4.subtract}
     * @function
     */
    $$$utils$vec4$$vec4.sub = $$$utils$vec4$$vec4.subtract;

    /**
     * Multiplies two vec4's
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {vec4} out
     */
    $$$utils$vec4$$vec4.multiply = function (out, a, b) {
      out[0] = a[0] * b[0];
      out[1] = a[1] * b[1];
      out[2] = a[2] * b[2];
      out[3] = a[3] * b[3];
      return out;
    };

    /**
     * Alias for {@link vec4.multiply}
     * @function
     */
    $$$utils$vec4$$vec4.mul = $$$utils$vec4$$vec4.multiply;

    /**
     * Divides two vec4's
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {vec4} out
     */
    $$$utils$vec4$$vec4.divide = function (out, a, b) {
      out[0] = a[0] / b[0];
      out[1] = a[1] / b[1];
      out[2] = a[2] / b[2];
      out[3] = a[3] / b[3];
      return out;
    };

    /**
     * Alias for {@link vec4.divide}
     * @function
     */
    $$$utils$vec4$$vec4.div = $$$utils$vec4$$vec4.divide;

    /**
     * Returns the minimum of two vec4's
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {vec4} out
     */
    $$$utils$vec4$$vec4.min = function (out, a, b) {
      out[0] = Math.min(a[0], b[0]);
      out[1] = Math.min(a[1], b[1]);
      out[2] = Math.min(a[2], b[2]);
      out[3] = Math.min(a[3], b[3]);
      return out;
    };

    /**
     * Returns the maximum of two vec4's
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {vec4} out
     */
    $$$utils$vec4$$vec4.max = function (out, a, b) {
      out[0] = Math.max(a[0], b[0]);
      out[1] = Math.max(a[1], b[1]);
      out[2] = Math.max(a[2], b[2]);
      out[3] = Math.max(a[3], b[3]);
      return out;
    };

    /**
     * Scales a vec4 by a scalar number
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the vector to scale
     * @param {Number} b amount to scale the vector by
     * @returns {vec4} out
     */
    $$$utils$vec4$$vec4.scale = function (out, a, b) {
      out[0] = a[0] * b;
      out[1] = a[1] * b;
      out[2] = a[2] * b;
      out[3] = a[3] * b;
      return out;
    };

    /**
     * Adds two vec4's after scaling the second operand by a scalar value
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @param {Number} scale the amount to scale b by before adding
     * @returns {vec4} out
     */
    $$$utils$vec4$$vec4.scaleAndAdd = function (out, a, b, scale) {
      out[0] = a[0] + (b[0] * scale);
      out[1] = a[1] + (b[1] * scale);
      out[2] = a[2] + (b[2] * scale);
      out[3] = a[3] + (b[3] * scale);
      return out;
    };

    /**
     * Calculates the euclidian distance between two vec4's
     *
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {Number} distance between a and b
     */
    $$$utils$vec4$$vec4.distance = function (a, b) {
      var x = b[0] - a[0],
      y = b[1] - a[1],
      z = b[2] - a[2],
      w = b[3] - a[3];
      return Math.sqrt(x * x + y * y + z * z + w * w);
    };

    /**
     * Alias for {@link vec4.distance}
     * @function
     */
    $$$utils$vec4$$vec4.dist = $$$utils$vec4$$vec4.distance;

    /**
     * Calculates the squared euclidian distance between two vec4's
     *
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {Number} squared distance between a and b
     */
    $$$utils$vec4$$vec4.squaredDistance = function (a, b) {
      var x = b[0] - a[0],
      y = b[1] - a[1],
      z = b[2] - a[2],
      w = b[3] - a[3];
      return x * x + y * y + z * z + w * w;
    };

    /**
     * Alias for {@link vec4.squaredDistance}
     * @function
     */
    $$$utils$vec4$$vec4.sqrDist = $$$utils$vec4$$vec4.squaredDistance;

    /**
     * Calculates the length of a vec4
     *
     * @param {vec4} a vector to calculate length of
     * @returns {Number} length of a
     */
    $$$utils$vec4$$vec4.length = function (a) {
      var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
      return Math.sqrt(x * x + y * y + z * z + w * w);
    };

    /**
     * Alias for {@link vec4.length}
     * @function
     */
    $$$utils$vec4$$vec4.len = $$$utils$vec4$$vec4.length;

    /**
     * Calculates the squared length of a vec4
     *
     * @param {vec4} a vector to calculate squared length of
     * @returns {Number} squared length of a
     */
    $$$utils$vec4$$vec4.squaredLength = function (a) {
      var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
      return x * x + y * y + z * z + w * w;
    };

    /**
     * Alias for {@link vec4.squaredLength}
     * @function
     */
    $$$utils$vec4$$vec4.sqrLen = $$$utils$vec4$$vec4.squaredLength;

    /**
     * Negates the components of a vec4
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a vector to negate
     * @returns {vec4} out
     */
    $$$utils$vec4$$vec4.negate = function (out, a) {
      out[0] = -a[0];
      out[1] = -a[1];
      out[2] = -a[2];
      out[3] = -a[3];
      return out;
    };

    /**
     * Normalize a vec4
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a vector to normalize
     * @returns {vec4} out
     */
    $$$utils$vec4$$vec4.normalize = function (out, a) {
      var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
      var len = x * x + y * y + z * z + w * w;
      if (len > 0) {
        len = 1 / Math.sqrt(len);
        out[0] = a[0] * len;
        out[1] = a[1] * len;
        out[2] = a[2] * len;
        out[3] = a[3] * len;
      }
      return out;
    };

    /**
     * Calculates the dot product of two vec4's
     *
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {Number} dot product of a and b
     */
    $$$utils$vec4$$vec4.dot = function (a, b) {
      return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
    };

    /**
     * Performs a linear interpolation between two vec4's
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @param {Number} t interpolation amount between the two inputs
     * @returns {vec4} out
     */
    $$$utils$vec4$$vec4.lerp = function (out, a, b, t) {
      var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
      out[0] = ax + t * (b[0] - ax);
      out[1] = ay + t * (b[1] - ay);
      out[2] = az + t * (b[2] - az);
      out[3] = aw + t * (b[3] - aw);
      return out;
    };

    /**
     * Generates a random vector with the given scale
     *
     * @param {vec4} out the receiving vector
     * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
     * @returns {vec4} out
     */
    $$$utils$vec4$$vec4.random = function (out, scale) {
      scale = scale || 1.0;

      //TODO: This is a pretty awful way of doing this. Find something better.
      out[0] = $$$utils$vec4$$GLMAT_RANDOM();
      out[1] = $$$utils$vec4$$GLMAT_RANDOM();
      out[2] = $$$utils$vec4$$GLMAT_RANDOM();
      out[3] = $$$utils$vec4$$GLMAT_RANDOM();
      $$$utils$vec4$$vec4.normalize(out, out);
      $$$utils$vec4$$vec4.scale(out, out, scale);
      return out;
    };

    /**
     * Transforms the vec4 with a mat4.
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the vector to transform
     * @param {mat4} m matrix to transform with
     * @returns {vec4} out
     */
    $$$utils$vec4$$vec4.transformMat4 = function (out, a, m) {
      var x = a[0], y = a[1], z = a[2], w = a[3];
      out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
      out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
      out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
      out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
      return out;
    };

    /**
     * Transforms the vec4 with a quat
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the vector to transform
     * @param {quat} q quaternion to transform with
     * @returns {vec4} out
     */
    $$$utils$vec4$$vec4.transformQuat = function (out, a, q) {
      var x = a[0], y = a[1], z = a[2],
      qx = q[0], qy = q[1], qz = q[2], qw = q[3],

      // calculate quat * vec
      ix = qw * x + qy * z - qz * y,
      iy = qw * y + qz * x - qx * z,
      iz = qw * z + qx * y - qy * x,
      iw = -qx * x - qy * y - qz * z;

      // calculate result * inverse quat
      out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
      out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
      out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
      return out;
    };

    /**
     * Perform some operation over an array of vec4s.
     *
     * @param {Array} a the array of vectors to iterate over
     * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
     * @param {Number} offset Number of elements to skip at the beginning of the array
     * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
     * @param {Function} fn Function to call for each vector in the array
     * @param {Object} [arg] additional argument to pass to fn
     * @returns {Array} a
     * @function
     */
    $$$utils$vec4$$vec4.forEach = (function () {
      var vec = $$$utils$vec4$$vec4.create();

      return function (a, stride, offset, count, fn, arg) {
        var i, l;
        if (!stride) {
          stride = 4;
        }

        if (!offset) {
          offset = 0;
        }

        if (count) {
          l = Math.min((count * stride) + offset, a.length);
        } else {
          l = a.length;
        }

        for (i = offset; i < l; i += stride) {
          vec[0] = a[i];
          vec[1] = a[i + 1];
          vec[2] = a[i + 2];
          vec[3] = a[i + 3];
          fn(vec, vec, arg);
          a[i] = vec[0];
          a[i + 1] = vec[1];
          a[i + 2] = vec[2];
          a[i + 3] = vec[3];
        }

        return a;
      };
    })();

    /**
     * Returns a string representation of a vector
     *
     * @param {vec4} vec vector to represent as a string
     * @returns {String} string representation of the vector
     */
    $$$utils$vec4$$vec4.str = function (a) {
      return "vec4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
    };

    function $$$utils$color$$componentToHex(c) {
      var hex = (~~c).toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    }

    function $$$utils$color$$hex(r, g, b) {
      return "#" + $$$utils$color$$componentToHex(r) + $$$utils$color$$componentToHex(g) + $$$utils$color$$componentToHex(b);
    }

    function $$$utils$color$$rgb(r, g, b) {
      return "rgb(" + r + ", " + g + ", " + b + ")";
    }

    function $$$utils$color$$rgba(r, g, b, a) {
      return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
    }

    var $$$player$canvas$$RED   = $$$utils$vec4$$vec4.fromValues(255, 0, 0, 0);
    var $$$player$canvas$$WHITE = $$$utils$vec4$$vec4.fromValues(255, 255, 255, 0);
    var $$$player$canvas$$BLACK = $$$utils$vec4$$vec4.fromValues(0, 0, 0, 0);

    function $$$player$canvas$$Canvas () {
      this.primary           = $$$utils$vec4$$vec4.create();
      this.secondary         = $$$utils$vec4$$vec4.create();
      this.tertiary          = $$$utils$vec4$$vec4.create();
      this._gradientMapArray = $$$utils$vec4$$vec4.create();
    }

    var $$$player$canvas$$proto = $$$player$canvas$$Canvas.prototype;
    $$$player$canvas$$proto.destroy = function () {};
    $$$player$canvas$$proto.width = $$$player$canvas$$proto.height = 0;

    /*******************************
      Color
     *******************************/

    $$$player$canvas$$proto.primary = null;

    $$$player$canvas$$proto.secondary = null;

    $$$player$canvas$$proto.updateColor = function () {
      this.primaryHex   = $$$utils$color$$hex.apply(null, this.primary);
      this.secondaryHex = $$$utils$color$$hex.apply(null, this.secondary);
      this.tertiaryHex  = $$$utils$color$$hex.apply(null, this.tertiary);
    };

    $$$player$canvas$$proto.primaryHex = null;
    $$$player$canvas$$proto.secondaryHex = null;
    $$$player$canvas$$proto.tertiaryHex = null;

    $$$player$canvas$$proto.primaryRgba = function (alpha) {
      return $$$utils$color$$rgba(this.primary[0], this.primary[1], this.primary[2], alpha);
    };

    $$$player$canvas$$proto.secondaryRgba = function (alpha) {
      return $$$utils$color$$rgba(this.secondary[0], this.secondary[1], this.secondary[2], alpha);
    };

    $$$player$canvas$$proto.tertiaryRgba = function (alpha) {
      return $$$utils$color$$rgba(this.tertiary[0], this.tertiary[1], this.tertiary[2], alpha);
    };

    $$$player$canvas$$proto._gradientMapArray = null;

    $$$player$canvas$$proto.gradientMap = function (c) {
      var primaryLength = $$$utils$vec4$$vec4.sqrLen(this.primary),
      secondaryLength = $$$utils$vec4$$vec4.sqrLen(this.secondary),
      light = this.primary,
      dark = this.secondary,
      percent;

      percent = (c[0] + c[1] + c[2]) / (256 * 3);

      if (primaryLength > secondaryLength) {
        light = this.secondary;
        dark = this.primary;
      }

      return $$$utils$vec4$$vec4.lerp(this._gradientMapArray, light, dark, percent);
    };

    $$$player$canvas$$proto.gradientMapHex = function (c) {
      var map = this.gradientMap(c);
      return $$$utils$color$$hex(map[0], map[1], map[2]);
    };

    $$$player$canvas$$proto.gradientMapRgba = function (c, alpha) {
      var map = this.gradientMap(c);
      return $$$utils$color$$rgba(map[0], map[1], map[2], alpha);
    };

    $$$player$canvas$$proto.gradientMap3 = function (c) {
      var percent = (c[0] + c[1] + c[2]) / (256 * 3);
      if (percent > 0.5) {
        return $$$utils$vec4$$vec4.lerp(this._gradientMapArray, $$$player$canvas$$RED, $$$player$canvas$$WHITE, (percent - 0.5) * 2);
      }
      return $$$utils$vec4$$vec4.lerp(this._gradientMapArray, $$$player$canvas$$BLACK, $$$player$canvas$$RED, percent * 2);
    };

    $$$player$canvas$$proto.gradientMap3Hex = function (c) {
      return $$$utils$color$$hex.apply(null, this.gradientMap3(c));
    };

    /*******************************
      Tick
     *******************************/

    $$$player$canvas$$proto.__prepare = function () {
      this.lineWidth(1).lineCap("butt").globalAlpha(1);
    };

    $$$player$canvas$$proto.prepare = function () {};

    /*******************************
      Random
     *******************************/

    $$$player$canvas$$proto.randX = function () {
      return Math.random() * this.width;
    };

    $$$player$canvas$$proto.randY = function () {
      return Math.random() * this.height;
    };

    $$$player$canvas$$proto.randXCenter = function () {
      var r = ((Math.random() * 2) - 1) * Math.random(),
      half = this.width / 2;
      return half + (half * r);
    };

    $$$player$canvas$$proto.randYCenter = function () {
      var r = ((Math.random() * 2) - 1) * Math.random(),
      half = this.height / 2;
      return half + (half * r);
    };

    /*******************************
      Tick
     *******************************/

    $$$player$canvas$$proto.tick                     = function () {};

    $$$player$canvas$$proto.draw                     = function () {};
    $$$player$canvas$$proto.drawAtTime               = function () {};
    $$$player$canvas$$proto.drawAtPercent            = function () {};
    $$$player$canvas$$proto.drawFromPercentToPercent = function () {};

    function $$$player$canvas$$makeGetterSetter(name) {
      $$$player$canvas$$proto[name] = function (a) {
        if (a !== null) {
          this.ctx[name] = a;
          return this;
        } else {
          return this.ctx[name];
        }
      };
    }

    function $$$player$canvas$$makeProxy(name) {
      $$$player$canvas$$proto[name] = function () {
        return this.ctx[name].apply(this.ctx, arguments);
      };
    }

    function $$$player$canvas$$makeProxyChainable(name) {
      $$$player$canvas$$proto[name] = function () {
        this.ctx[name].apply(this.ctx, arguments);
        return this;
      };
    }

    var $$$player$canvas$$getset = "fillStyle font globalAlpha globalCompositeOperation lineCap lineDashOffset lineJoin lineWidth miterLimit shadowBlur shadowColor shadowOffsetX shadowOffsetY strokeStyle textAlign textBaseline".split(" ");
    var $$$player$canvas$$proxy = "createImageData createLinearGradient createPattern createRadialGradient getImageData getLineDash isPointInPath isPointInStroke measureText".split(" ");
    var $$$player$canvas$$proxyChainable = "arc arcTo beginPath bezierCurveTo clearRect clearShadow clip closePath drawImage drawImageFromRect fill fillRect fillText lineTo moveTo putImageData quadraticCurveTo rect restore rotate save scale setLineDash setTransform stroke strokeRect strokeText transform translate".split(" ");
    var $$$player$canvas$$i;

    for ($$$player$canvas$$i = 0; $$$player$canvas$$i < $$$player$canvas$$getset.length; $$$player$canvas$$i++) {
      $$$player$canvas$$makeGetterSetter($$$player$canvas$$getset[$$$player$canvas$$i]);
    }

    for ($$$player$canvas$$i = 0; $$$player$canvas$$i < $$$player$canvas$$proxy.length; $$$player$canvas$$i++) {
      $$$player$canvas$$makeProxy($$$player$canvas$$proxy[$$$player$canvas$$i]);
    }

    for ($$$player$canvas$$i = 0; $$$player$canvas$$i < $$$player$canvas$$proxyChainable.length; $$$player$canvas$$i++) {
      $$$player$canvas$$makeProxyChainable($$$player$canvas$$proxyChainable[$$$player$canvas$$i]);
    }

    function canvases$wave$$WaveCanvas () {
      $$$player$canvas$$Canvas.call(this);
    }

    canvases$wave$$WaveCanvas.key = "wave";
    var canvases$wave$$proto = canvases$wave$$WaveCanvas.prototype = new $$$player$canvas$$Canvas();

    function canvases$wave$$sin(x) {
      return Math.sin(x * Math.PI);
    }

    function canvases$wave$$y(x, t, c, a) {
      var o = canvases$wave$$sin(x);
      o *= canvases$wave$$sin(x + t * c);
      o *= canvases$wave$$sin(x * a);
      return o;
    }

    canvases$wave$$proto.prepare = function () {
      this.fillStyle(this.primaryHex).strokeStyle(this.secondaryHex);
    };

    canvases$wave$$proto.drawAtPercent = function (t) {
      var i;

      this.fillRect(0, 0, this.width, this.height);

      this.lineWidth(1);

      for (i = 0; i < 20; i ++) {
        this.strokeStyle(this.secondaryRgba(i / 20));
        this.drawLine((5 + i) / 25, t * 1.0, 1.7, 3.9);
        this.drawLine((5 + i) / 25, t * 0.2, 5.7, 2.1);
        this.drawLine((5 + i) / 25, t * 0.5, 9.7, 3.1);
      }

      this.lineWidth(1);
    };

    canvases$wave$$proto.drawLine = function (p, t, c, a) {
      var j,
      h = this.height / 2,
      mag = (this.width / 8) * p;
      this.beginPath().moveTo(0, h);
      for (j = -40; j < this.width + 40; j += 10) {
        this.lineTo(j, h + canvases$wave$$y(j / this.width, t, c, a) * mag);
      }
      this.stroke();
    };

    var $$$utils$image$cache$$SOURCES = {};
    var $$$utils$image$cache$$LOADED = {};
    var $$$utils$image$cache$$CBS = {};

    function $$$utils$image$cache$$preload (src, cb) {
      if (!$$$utils$image$cache$$SOURCES[src]) {
        $$$utils$image$cache$$SOURCES[src] = $$$utils$image$cache$$load(src);
      }
      if (typeof cb !== "function") { return; }

      if ($$$utils$image$cache$$LOADED[src]) {
        cb($$$utils$image$cache$$LOADED[src]);
      } else {
        $$$utils$image$cache$$CBS[src] = $$$utils$image$cache$$CBS[src] || [];
        $$$utils$image$cache$$CBS[src].push(function (img) {
          cb(img);
        });
      }
    }

    function $$$utils$image$cache$$load (src) {
      var img = new Image();
      img.onload = function () {
        var i;

        $$$utils$image$cache$$LOADED[src] = img;

        if (!$$$utils$image$cache$$CBS[src]) { return; }

        for (i = 0; i < $$$utils$image$cache$$CBS[src].length; i++) {
          $$$utils$image$cache$$CBS[src][i](img);
        }

        $$$utils$image$cache$$CBS[src].length = 0;
      };
      img.src = src;
      return img;
    }

    function $$$utils$image$data$$ImageData () {
      this.canvas = document.createElement("canvas");
      this.ctx = this.canvas.getContext("2d");
      this._pixel = $$$utils$vec4$$vec4.create();
    }

    var $$$utils$image$data$$proto = $$$utils$image$data$$ImageData.prototype;
    $$$utils$image$data$$proto.canvas = null;
    $$$utils$image$data$$proto.ctx = null;
    $$$utils$image$data$$proto.width = 0;
    $$$utils$image$data$$proto.height = 0;

    $$$utils$image$data$$proto.setWidthAndHeight = function (w, h) {
      this.width = w;
      this.height = h;
    };

    $$$utils$image$data$$proto.img = null;

    $$$utils$image$data$$proto.setSrc = function (src) {
      var self = this;
      this.img = null;
      $$$utils$image$cache$$preload(src, function (img) {
        self.img = img;
        self.rebuild();
      });
    };

    $$$utils$image$data$$proto.scaleMode = "cover";

    $$$utils$image$data$$proto.setScaleMode = function (mode) {
      switch (mode) {
        case "cover":
        case "contain":
        case "fill":
        this.scaleMode = mode;
        this.rebuild();
        return;
      }
      throw mode + " scaling mode not supported";
    };

    $$$utils$image$data$$proto.rebuild = function () {
      if (!this.img || !this.width || !this.height) {
        return;
      }
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      this.ctx.clearRect(0, 0, this.width, this.height);
      this["rebuild_" + this.scaleMode]();
      this.pixels = this.ctx.getImageData(0, 0, this.width, this.height);
    };

    $$$utils$image$data$$proto.rebuild_cover = function () {
      var thisRatio = this.width / this.height,
      imgRatio  = this.img.width / this.img.height,
      x, y, w, h;
      x = y = w = h = 0;
      if (thisRatio > imgRatio) {
        // crop top and bottom
        w = this.width;
        h = w / imgRatio;
        y = (this.height - h) / 2;
      } else {
        // crop sides
        h = this.height;
        w = h * imgRatio;
        x = (this.width - w) / 2;
      }
      this.ctx.drawImage(this.img, x, y, w, h);
    };

    $$$utils$image$data$$proto.rebuild_contain = function () {
      var thisRatio = this.width / this.height,
      imgRatio  = this.img.width / this.img.height,
      x, y, w, h;
      x = y = w = h = 0;
      if (thisRatio > imgRatio) {
        // black bars on the sides
        h = this.height;
        w = h * imgRatio;
        x = (this.width - w) / 2;
      } else {
        // black bars on the top and bottom
        w = this.width;
        h = w / imgRatio;
        y = (this.height - h) / 2;
      }
      this.ctx.drawImage(this.img, x, y, w, h);
    };

    $$$utils$image$data$$proto.rebuild_fill = function () {
      this.ctx.drawImage(this.img, 0, 0, this.width, this.height);
    };

    $$$utils$image$data$$proto.pixels = null;
    $$$utils$image$data$$proto._pixel = null;

    $$$utils$image$data$$proto.getPixel = function (x, y) {
      var i = ~~x,
      data = this.pixels && this.pixels.data;
      if (this.pixels) {
        i += (this.pixels.width * (~~y));
      }
      i *= 4;
      if (!data || data.length < i + 4) {
        this._pixel[0] = 0;
        this._pixel[1] = 0;
        this._pixel[2] = 0;
        this._pixel[3] = 0;
      } else {
        this._pixel[0] = data[i];
        this._pixel[1] = data[i + 1];
        this._pixel[2] = data[i + 2];
        this._pixel[3] = data[i + 3];
      }

      return this._pixel;
    };

    $$$utils$image$data$$proto.getPixelClamped = function (x, y) {
      x = Math.min(this.width, Math.max(0, x));
      y = Math.min(this.height, Math.max(0, y));
      return this.getPixel(x, y);
    };

    var canvases$triangle$$triangles = [];
    var canvases$triangle$$COS_60 = Math.cos(Math.PI / 6);
    var canvases$triangle$$initial;
    var canvases$triangle$$SRC = "img/tesla.jpg";

    function canvases$triangle$$Triangle(x, y, radius, isUp) {
      this.x = x;
      this.y = y;
      this.r = radius;
      this.up = isUp ? 1 : -1;
      canvases$triangle$$triangles.push(this);
    }

    var canvases$triangle$$triProto = canvases$triangle$$Triangle.prototype;

    canvases$triangle$$triProto.center = function () {
      return [
        (this.x),
        (this.y + this.up * this.r)
      ];
    };

    canvases$triangle$$triProto.right = function () {
      return [
        (this.x + this.r * canvases$triangle$$COS_60),
        (this.y - this.up * this.r * 0.5)
      ];
    };

    canvases$triangle$$triProto.left = function () {
      return [
        (this.x - this.r * canvases$triangle$$COS_60),
        (this.y - this.up * this.r * 0.5)
      ];
    };

    canvases$triangle$$triProto.top = function () {
      if (this.up < 0) {
        return this.y - this.r;
      }
      return this.y - this.r * 0.5;
    };

    canvases$triangle$$triProto.bottom = function () {
      if (this.up > 0) {
        return this.y + this.r;
      }
      return this.y + this.r * 0.5;
    };

    canvases$triangle$$triProto._containsUp = function (x, y) {
      var top = this.y - this.r,
      bot = this.y + this.r * 0.5,
      offset = y - (Math.abs(x - this.x) * canvases$triangle$$COS_60 * 2);

      if (y < top || y > bot) {
        //console.log('past top or bottom', top, '<', y, '<', bot);
        return false;
      }

      if (offset < top) {
        //console.log('past side', offset, '<', top);
        return false;
      }

      return true;
    };

    canvases$triangle$$triProto._containsDown = function (x, y) {
      var top = this.y - this.r * 0.5,
      bot = this.y + this.r,
      offset = y + (Math.abs(x - this.x) * canvases$triangle$$COS_60 * 2);

      if (y < top || y > bot) {
        //console.log('past top or bottom', top, '<', y, '<', bot);
        return false;
      }
      if (offset > bot) {
        //console.log('past side', offset, '<', bot);
        return false;
      }
      return true;
    };

    canvases$triangle$$triProto.contains = function (x, y) {
      return this.up < 0 ? this._containsUp(x, y) : this._containsDown(x, y);
    };

    canvases$triangle$$triProto.splitAt = function (x, y) {
      var split;
      // never split something so that it is smaller than 3 pixel radius
      if (this.r < 3) {
        return;
      }
      if (!this.contains(x, y)) {
        return;
      }
      if (!this.isSplit) {
        this.divide();
        return this;
      }
      for (var i = 0; i < 4; i++) {
        split = this[i].splitAt(x, y);
        if (split) {
          return split;
        }
      }
    };

    canvases$triangle$$triProto.divide = function () {
      var r = this.r * 0.5,
      up = this.up !== 1;
      this[0] = new canvases$triangle$$Triangle(this.x, this.y, r, up);
      this[1] = new canvases$triangle$$Triangle(this.x - r * canvases$triangle$$COS_60, this.y - this.up * r * 0.5, r, !up);
      this[2] = new canvases$triangle$$Triangle(this.x + r * canvases$triangle$$COS_60, this.y - this.up * r * 0.5, r, !up);
      this[3] = new canvases$triangle$$Triangle(this.x, this.y + this.up * r, r, !up);
      this.isSplit = true;
      return this;
    };

    // preload images
    $$$utils$image$cache$$preload(canvases$triangle$$SRC);

    function canvases$triangle$$TriangleCanvas () {
      $$$player$canvas$$Canvas.call(this);
      this.image = new $$$utils$image$data$$ImageData();
      this.image.setSrc(canvases$triangle$$SRC);
      this.image.setScaleMode("cover");
      this.triangleColor = $$$utils$vec4$$vec4.create();
    }

    canvases$triangle$$TriangleCanvas.key = "triangle";
    var canvases$triangle$$proto = canvases$triangle$$TriangleCanvas.prototype = new $$$player$canvas$$Canvas();
    canvases$triangle$$proto.image = null;

    canvases$triangle$$proto.prepare = function () {
      this.removeTriangles();
      canvases$triangle$$initial = new canvases$triangle$$Triangle(this.width / 2, this.height / 2, this.width * 2);
      this.fillStyle(this.primaryHex).fillRect(0, 0, this.width, this.height);
      this.image.setWidthAndHeight(this.width, this.height);
      this.image.rebuild();
    };

    canvases$triangle$$proto.drawAtTime = function () {
      var i;
      for (i = 0; i < 5; i++) {
        this.splitTriangles();
      }
    };

    canvases$triangle$$proto.splitTriangles = function () {
      var tri = canvases$triangle$$initial.splitAt(this.randXCenter(), this.randY());
      if (tri) {
        this.drawTriangles(tri);
      }
    };

    canvases$triangle$$proto.drawTriangles = function (tri) {
      var i;
      if (tri.isSplit) {
        for (i = 0; i < 4; i++) {
          this.drawTriangle(tri[i]);
        }
      }
    };

    canvases$triangle$$proto.triangleColor = null;

    canvases$triangle$$proto.drawTriangle = function (tri) {
      var c = tri.center(),
      l = tri.left(),
      r = tri.right();
      this.beginPath().fillStyle(this.getTriangleHex(c, l, r, tri.x, tri.y))
      .moveTo(c[0], c[1])
      .lineTo(l[0], l[1])
      .lineTo(r[0], r[1])
      .lineTo(c[0], c[1])
      .fill();
    };

    canvases$triangle$$proto.getTriangleHex = function (c, l, r, x, y) {
      $$$utils$vec4$$vec4.copy(this.triangleColor, this.image.getPixelClamped(c[0], c[1]));
      $$$utils$vec4$$vec4.lerp(this.triangleColor, this.triangleColor, this.image.getPixelClamped(l[0], l[1]), 1 / 2);
      $$$utils$vec4$$vec4.lerp(this.triangleColor, this.triangleColor, this.image.getPixelClamped(r[0], r[1]), 1 / 3);
      $$$utils$vec4$$vec4.lerp(this.triangleColor, this.triangleColor, this.image.getPixelClamped(x, y), 1 / 4);
      return this.gradientMapHex(this.triangleColor);
    };

    canvases$triangle$$proto.removeTriangles = function () {
      var triangle;
      while (canvases$triangle$$triangles.length) {
        triangle = canvases$triangle$$triangles.pop();
        triangle[0] = null;
        triangle[1] = null;
        triangle[2] = null;
        triangle[3] = null;
      }
    };

    canvases$triangle$$proto.destroy = function () {
      this.removeTriangles();
    };

    function canvases$radial$wave$$RadialWaveCanvas() {
      $$$player$canvas$$Canvas.call(this);
    }

    canvases$radial$wave$$RadialWaveCanvas.key = "radial-wave";
    var canvases$radial$wave$$proto = canvases$radial$wave$$RadialWaveCanvas.prototype = new $$$player$canvas$$Canvas();

    canvases$radial$wave$$proto.prepare = function () {
      this.setTransform(1, 0, 0, 1, this.width / 2, this.height / 2);
      this.fillStyle(this.primaryHex).fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
      this.fillStyle(this.primaryRgba(0.1)).strokeStyle(this.secondaryHex);
      this.t = 0;
    };

    canvases$radial$wave$$proto.t = 0;

    canvases$radial$wave$$proto.drawAtPercent = function () {
      var astep = Math.PI * 0.01;
      var dstep = 60;
      var a, d;
      var x, y;
      var d2;

      this.beginPath().moveTo(0, 0);
      for (d = this.t; d < 500; d += dstep) {
        for (a = 0; a <= Math.PI * 2; a += astep) {
          d2 = d * (Math.sin(a * 24) * 0.25 + 0.75);
          d2 -= (a / (Math.PI * 2)) * dstep;
          d2 = Math.max(0, d2);
          x = 2 * Math.cos(a) - Math.cos(a * 2);
          y = 2 * Math.sin(a) - Math.sin(a * 2);
          x *= Math.abs(Math.sin(a));
          y *= Math.abs(Math.sin(a));
          this.lineTo(d2 * x, d2 * y);
        }
      }
      this.stroke();
      this.t++;
      if (this.t > dstep) {
        this.t = 0;
      }
      this.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
    };

    canvases$radial$wave$$proto.destroy = function () {
      this.setTransform(1, 0, 0, 1, 0, 0);
    };

    function canvases$donuts$$DonutsCanvas() {
      $$$player$canvas$$Canvas.call(this);
    }

    canvases$donuts$$DonutsCanvas.key = "donuts";
    var canvases$donuts$$proto = canvases$donuts$$DonutsCanvas.prototype = new $$$player$canvas$$Canvas();
    var canvases$donuts$$TAU = Math.PI * 2;

    canvases$donuts$$proto.prepare = function () {
      this.fillStyle(this.primaryHex).fillRect(0, 0, this.width, this.height);
      this.strokeStyle(this.secondaryRgba(0.2));
      this.lineWidth(1);
    };

    canvases$donuts$$proto.draw = function () {
      var i,
      x = this.width / 2,
      y = this.height / 2,
      a1, a2,
      x1, x2,
      y1, y2,
      r = 30,
      max = 10;

      r = Math.sqrt(x * x + y * y) / (max - 1);

      this.beginPath();
      for (i = 1; i < max; i++) {
        a1 = Math.random();
        a2 = a1 + 0.35;
        x1 = Math.cos(a1 * canvases$donuts$$TAU) * i * r;
        x2 = Math.cos(a2 * canvases$donuts$$TAU) * i * r;
        y1 = Math.sin(a1 * canvases$donuts$$TAU) * i * r;
        y2 = Math.sin(a2 * canvases$donuts$$TAU) * i * r;
        this.moveTo(x + x1, y + y1).lineTo(x + x2, y + y2);
      }
      this.stroke();
    };

    function canvases$grid$$GridCanvas() {
      $$$player$canvas$$Canvas.call(this);
      this.image = new $$$utils$image$data$$ImageData();
      this.image.setSrc(canvases$grid$$SRC);
      this.image.setScaleMode("cover");
    }

    canvases$grid$$GridCanvas.key = "grid";
    var canvases$grid$$proto = canvases$grid$$GridCanvas.prototype = new $$$player$canvas$$Canvas();
    var canvases$grid$$IntArray = window.Int32Array || Array;
    var canvases$grid$$LENGTH = 100000;
    var canvases$grid$$used = new canvases$grid$$IntArray(canvases$grid$$LENGTH);
    var canvases$grid$$firstEmpty = 0;
    var canvases$grid$$SRC = "img/amilie.jpg";
    $$$utils$image$cache$$preload(canvases$grid$$SRC);
    canvases$grid$$proto.image = null;

    canvases$grid$$proto.prepare = function () {
      this.fillStyle(this.primaryHex).fillRect(0, 0, this.width, this.height);
      this.fillStyle(this.secondaryRgba(0.5));
      this.image.setWidthAndHeight(this.width, this.height);
      this.image.rebuild();
      this.reset();
    };

    canvases$grid$$proto.reset = function () {
      canvases$grid$$firstEmpty = 0;
      for (var i = 0; i < canvases$grid$$LENGTH; i++) {
        canvases$grid$$used[i] = 0;
      }
    };

    // function bitsToString(num) {
    //   var i, output = "";
    //   for (i = 0; i < 32; i++) {
    //     output = +!!(num & (1 << i)) + output;
    //   }
    //   return output;
    // }
    // proto.log = function () {
    //   console.log('');
    //   for (var i = 0; i < LENGTH && used[i]; i++) {
    //     console.log(bitsToString(used[i]));
    //   }
    // };

    canvases$grid$$proto.add = function (w, h) {
      var i, j, k, x, y;

      var max = 33 - w;

      var colmask;
      var rowmask = 0;
      var found = 0;

      // Update the first empty row
      for (i = canvases$grid$$firstEmpty; i < canvases$grid$$LENGTH; i++) {
        // If the inverse is not 0, the row is not empty.
        if (~canvases$grid$$used[i]) {
          break;
        }
        canvases$grid$$firstEmpty = i;
      }

      // create a row mask with the width of the cell
      // eg:
      // w = 1 yields 00000001
      // w = 3 yields 00000111
      // w = 8 yields 11111111
      for (i = 0; i < w; i++) {
        rowmask = (rowmask << 1) + 1;
      }

      // Loop through rows up to the max.

      // 99.99% of the time this loop will end early,
      // but the max is to ensure we don't have an infinite loop.
      for (i = canvases$grid$$firstEmpty; i < canvases$grid$$LENGTH; i++) {

        // Create a column mask

        // We take the next h rows and join them together
        // to find openings that span all rows.

        // For example, with the following grid, the colmask will
        // contain zeroes only for columns that have zeroes in
        // every row.
        // 11001111
        // 00100100
        // 10000001
        // For the first two rows, the mask is as follows.
        // 11101111
        // For the last two rows, the mask is as follows.
        // 10100101

        // This allows us to check all h rows at once.

        colmask = canvases$grid$$used[i];
        for (j = 1; j < h; j++) {
          colmask = colmask | canvases$grid$$used[i + j];
        }

        // Now that we have a mask for the columns, loop through each
        // column and check the rowmask against the colmask

        // What we are looking for is a match where the enabled bits
        // on the rowmask are disabled on the colmask.

        // For example, with a colmask like so...
        // 00010011
        // ...and a rowmask like so...
        // 00000111
        // ...we loop through until the rowmask bits match empty colmask bits.
        // Each iteration, we shift the bits once and try again.

        // colmask  00010011

        // j = 0    00000111
        // j = 1    00001110
        // j = 2    00011100
        // j = 3    00111000
        // j = 4    01110000
        // j = 5    11100000 // finally a match

        for (j = 0; j < max; j++) {
          // Shift the bits by the number of columns we have traveled
          k = rowmask << j;

          // Invert the colmask and check that the matching bits are
          // exactly the bits in the rowmask.
          if ((k & ~colmask) == k) {

        // We store the current rowmask so we can mark those bits
        // as being used and stop looking for a column.
        found = k;
        break;
          }
        }

        // If we found a place for this item, we mark the rows and stop looking.

        if (found) {
          for (j = i; j < i + h; j++) {
        canvases$grid$$used[j] |= found;
          }
          break;
        }
      }

      // The row is just the last row we checked.
      y = i;

      // To find the column, keep shifting the found match until
      // the smallest bit is enabled.
      for (i = 0; i < 32; i++) {
        if (found & 1 == 1) {
          x = i;
          break;
        }
        found = found >> 1;
      }

      // Because the canvas is wider than it is tall,
      // we draw rows from bottom to top and cols from left to right.
      this.drawRect(y, x, h, w);
    };

    canvases$grid$$proto.drawRect = function (x, y, w, h) {
      var sets = Math.round(this.height / 160);
      var ratio = this.height / (sets * 32);
      var cols = Math.floor(this.width / ratio);
      y += Math.floor(x / cols) * 32;
      x = x % cols;

      var x1 = Math.floor(x * ratio);
      var y1 = Math.floor(y * ratio);

      var w1 = Math.floor((x + w) * ratio) - (x1 + 1);
      var h1 = Math.floor((y + h) * ratio) - (y1 + 1);

      this.fillStyle(this.gradientMapHex(this.image.getPixelClamped(x1, y1)));
      this.fillRect(x1, y1, w1, h1);
    };

    canvases$grid$$proto.draw = function () {
      var i, w, h;
      for (i = 0; i < 50; i++) {
        w = 2 - Math.floor(Math.sqrt(Math.random() * 4));
        h = 4 - Math.floor(Math.sqrt(Math.random() * 16));
        this.add(w, h);
      }
    };

    var $$vec2$$GLMAT_ARRAY_TYPE = (typeof Float32Array !== "undefined") ? Float32Array : Array;
    var $$vec2$$GLMAT_RANDOM = Math.random;

    /**
     * @class 2 Dimensional Vector
     * @name vec2
     */
    var $$vec2$$vec2 = {};

    /**
     * Creates a new, empty vec2
     *
     * @returns {vec2} a new 2D vector
     */
    $$vec2$$vec2.create = function () {
      var out = new $$vec2$$GLMAT_ARRAY_TYPE(2);
      out[0] = 0;
      out[1] = 0;
      return out;
    };

    /**
     * Creates a new vec2 initialized with values from an existing vector
     *
     * @param {vec2} a vector to clone
     * @returns {vec2} a new 2D vector
     */
    $$vec2$$vec2.clone = function (a) {
      var out = new $$vec2$$GLMAT_ARRAY_TYPE(2);
      out[0] = a[0];
      out[1] = a[1];
      return out;
    };

    /**
     * Creates a new vec2 initialized with the given values
     *
     * @param {Number} x X component
     * @param {Number} y Y component
     * @returns {vec2} a new 2D vector
     */
    $$vec2$$vec2.fromValues = function (x, y) {
      var out = new $$vec2$$GLMAT_ARRAY_TYPE(2);
      out[0] = x;
      out[1] = y;
      return out;
    };

    /**
     * Copy the values from one vec2 to another
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the source vector
     * @returns {vec2} out
     */
    $$vec2$$vec2.copy = function (out, a) {
      out[0] = a[0];
      out[1] = a[1];
      return out;
    };

    /**
     * Set the components of a vec2 to the given values
     *
     * @param {vec2} out the receiving vector
     * @param {Number} x X component
     * @param {Number} y Y component
     * @returns {vec2} out
     */
    $$vec2$$vec2.set = function (out, x, y) {
      out[0] = x;
      out[1] = y;
      return out;
    };

    /**
     * Adds two vec2's
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec2} out
     */
    $$vec2$$vec2.add = function (out, a, b) {
      out[0] = a[0] + b[0];
      out[1] = a[1] + b[1];
      return out;
    };

    /**
     * Subtracts vector b from vector a
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec2} out
     */
    $$vec2$$vec2.subtract = function (out, a, b) {
      out[0] = a[0] - b[0];
      out[1] = a[1] - b[1];
      return out;
    };

    /**
     * Alias for {@link vec2.subtract}
     * @function
     */
    $$vec2$$vec2.sub = $$vec2$$vec2.subtract;

    /**
     * Multiplies two vec2's
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec2} out
     */
    $$vec2$$vec2.multiply = function (out, a, b) {
      out[0] = a[0] * b[0];
      out[1] = a[1] * b[1];
      return out;
    };

    /**
     * Alias for {@link vec2.multiply}
     * @function
     */
    $$vec2$$vec2.mul = $$vec2$$vec2.multiply;

    /**
     * Divides two vec2's
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec2} out
     */
    $$vec2$$vec2.divide = function (out, a, b) {
      out[0] = a[0] / b[0];
      out[1] = a[1] / b[1];
      return out;
    };

    /**
     * Alias for {@link vec2.divide}
     * @function
     */
    $$vec2$$vec2.div = $$vec2$$vec2.divide;

    /**
     * Returns the minimum of two vec2's
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec2} out
     */
    $$vec2$$vec2.min = function (out, a, b) {
      out[0] = Math.min(a[0], b[0]);
      out[1] = Math.min(a[1], b[1]);
      return out;
    };

    /**
     * Returns the maximum of two vec2's
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec2} out
     */
    $$vec2$$vec2.max = function (out, a, b) {
      out[0] = Math.max(a[0], b[0]);
      out[1] = Math.max(a[1], b[1]);
      return out;
    };

    /**
     * Scales a vec2 by a scalar number
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the vector to scale
     * @param {Number} b amount to scale the vector by
     * @returns {vec2} out
     */
    $$vec2$$vec2.scale = function (out, a, b) {
      out[0] = a[0] * b;
      out[1] = a[1] * b;
      return out;
    };

    /**
     * Adds two vec2's after scaling the second operand by a scalar value
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @param {Number} scale the amount to scale b by before adding
     * @returns {vec2} out
     */
    $$vec2$$vec2.scaleAndAdd = function (out, a, b, scale) {
      out[0] = a[0] + (b[0] * scale);
      out[1] = a[1] + (b[1] * scale);
      return out;
    };

    /**
     * Calculates the euclidian distance between two vec2's
     *
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {Number} distance between a and b
     */
    $$vec2$$vec2.distance = function (a, b) {
      var x = b[0] - a[0],
      y = b[1] - a[1];
      return Math.sqrt(x * x + y * y);
    };

    /**
     * Alias for {@link vec2.distance}
     * @function
     */
    $$vec2$$vec2.dist = $$vec2$$vec2.distance;

    /**
     * Calculates the squared euclidian distance between two vec2's
     *
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {Number} squared distance between a and b
     */
    $$vec2$$vec2.squaredDistance = function (a, b) {
      var x = b[0] - a[0],
      y = b[1] - a[1];
      return x * x + y * y;
    };

    /**
     * Alias for {@link vec2.squaredDistance}
     * @function
     */
    $$vec2$$vec2.sqrDist = $$vec2$$vec2.squaredDistance;

    /**
     * Calculates the length of a vec2
     *
     * @param {vec2} a vector to calculate length of
     * @returns {Number} length of a
     */
    $$vec2$$vec2.length = function (a) {
      var x = a[0],
      y = a[1];
      return Math.sqrt(x * x + y * y);
    };

    /**
     * Alias for {@link vec2.length}
     * @function
     */
    $$vec2$$vec2.len = $$vec2$$vec2.length;

    /**
     * Calculates the squared length of a vec2
     *
     * @param {vec2} a vector to calculate squared length of
     * @returns {Number} squared length of a
     */
    $$vec2$$vec2.squaredLength = function (a) {
      var x = a[0],
      y = a[1];
      return x * x + y * y;
    };

    /**
     * Alias for {@link vec2.squaredLength}
     * @function
     */
    $$vec2$$vec2.sqrLen = $$vec2$$vec2.squaredLength;

    /**
     * Negates the components of a vec2
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a vector to negate
     * @returns {vec2} out
     */
    $$vec2$$vec2.negate = function (out, a) {
      out[0] = -a[0];
      out[1] = -a[1];
      return out;
    };

    /**
     * Normalize a vec2
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a vector to normalize
     * @returns {vec2} out
     */
    $$vec2$$vec2.normalize = function (out, a) {
      var x = a[0],
      y = a[1],
      len = x * x + y * y;
      if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
        out[0] = a[0] * len;
        out[1] = a[1] * len;
      }
      return out;
    };

    /**
     * Calculates the dot product of two vec2's
     *
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {Number} dot product of a and b
     */
    $$vec2$$vec2.dot = function (a, b) {
      return a[0] * b[0] + a[1] * b[1];
    };

    /**
     * Computes the cross product of two vec2's
     * Note that the cross product must by definition produce a 3D vector
     *
     * @param {vec3} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec3} out
     */
    $$vec2$$vec2.cross = function (out, a, b) {
      var z = a[0] * b[1] - a[1] * b[0];
      out[0] = out[1] = 0;
      out[2] = z;
      return out;
    };

    /**
     * Performs a linear interpolation between two vec2's
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @param {Number} t interpolation amount between the two inputs
     * @returns {vec2} out
     */
    $$vec2$$vec2.lerp = function (out, a, b, t) {
      var ax = a[0],
      ay = a[1];
      out[0] = ax + t * (b[0] - ax);
      out[1] = ay + t * (b[1] - ay);
      return out;
    };

    /**
     * Generates a random vector with the given scale
     *
     * @param {vec2} out the receiving vector
     * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
     * @returns {vec2} out
     */
    $$vec2$$vec2.random = function (out, scale) {
      scale = scale || 1.0;
      var r = $$vec2$$GLMAT_RANDOM() * 2.0 * Math.PI;
      out[0] = Math.cos(r) * scale;
      out[1] = Math.sin(r) * scale;
      return out;
    };

    /**
     * Transforms the vec2 with a mat2
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the vector to transform
     * @param {mat2} m matrix to transform with
     * @returns {vec2} out
     */
    $$vec2$$vec2.transformMat2 = function (out, a, m) {
      var x = a[0],
      y = a[1];
      out[0] = m[0] * x + m[2] * y;
      out[1] = m[1] * x + m[3] * y;
      return out;
    };

    /**
     * Transforms the vec2 with a mat2d
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the vector to transform
     * @param {mat2d} m matrix to transform with
     * @returns {vec2} out
     */
    $$vec2$$vec2.transformMat2d = function (out, a, m) {
      var x = a[0],
      y = a[1];
      out[0] = m[0] * x + m[2] * y + m[4];
      out[1] = m[1] * x + m[3] * y + m[5];
      return out;
    };

    /**
     * Transforms the vec2 with a mat3
     * 3rd vector component is implicitly '1'
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the vector to transform
     * @param {mat3} m matrix to transform with
     * @returns {vec2} out
     */
    $$vec2$$vec2.transformMat3 = function (out, a, m) {
      var x = a[0],
      y = a[1];
      out[0] = m[0] * x + m[3] * y + m[6];
      out[1] = m[1] * x + m[4] * y + m[7];
      return out;
    };

    /**
     * Transforms the vec2 with a mat4
     * 3rd vector component is implicitly '0'
     * 4th vector component is implicitly '1'
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the vector to transform
     * @param {mat4} m matrix to transform with
     * @returns {vec2} out
     */
    $$vec2$$vec2.transformMat4 = function (out, a, m) {
      var x = a[0],
      y = a[1];
      out[0] = m[0] * x + m[4] * y + m[12];
      out[1] = m[1] * x + m[5] * y + m[13];
      return out;
    };

    /**
     * Perform some operation over an array of vec2s.
     *
     * @param {Array} a the array of vectors to iterate over
     * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
     * @param {Number} offset Number of elements to skip at the beginning of the array
     * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
     * @param {Function} fn Function to call for each vector in the array
     * @param {Object} [arg] additional argument to pass to fn
     * @returns {Array} a
     * @function
     */
    $$vec2$$vec2.forEach = (function () {
      var vec = $$vec2$$vec2.create();

      return function (a, stride, offset, count, fn, arg) {
        var i, l;
        if (!stride) {
          stride = 2;
        }

        if (!offset) {
          offset = 0;
        }

        if (count) {
          l = Math.min((count * stride) + offset, a.length);
        } else {
          l = a.length;
        }

        for (i = offset; i < l; i += stride) {
          vec[0] = a[i];
          vec[1] = a[i + 1];
          fn(vec, vec, arg);
          a[i] = vec[0];
          a[i + 1] = vec[1];
        }

        return a;
      };
    })();

    /**
     * Returns a string representation of a vector
     *
     * @param {vec2} vec vector to represent as a string
     * @returns {String} string representation of the vector
     */
    $$vec2$$vec2.str = function (a) {
      return "vec2(" + a[0] + ", " + a[1] + ")";
    };

    var $$$utils$path$$path = new $$$utils$path$$Path();

    function $$$utils$path$$Path () {
      this.R = $("#R")[0];
      this.E = $("#E")[0];
      this.D = $("#D")[0];
      this.lengthR = this.R.getTotalLength();
      this.lengthE = this.E.getTotalLength();
      this.lengthD = this.D.getTotalLength();
      this.length = this.lengthR + this.lengthE + this.lengthD;

      this.leftV = $$vec2$$vec2.create();
      this.rightV = $$vec2$$vec2.create();
    }

    var $$$utils$path$$proto = $$$utils$path$$Path.prototype;

    $$$utils$path$$proto.point = function (percent) {
      var tri = percent * 3;
      if (tri < 1) {
        return this._point(tri, this.R, this.lengthR);
      } else if (tri < 2) {
        return this._point(tri - 1, this.E, this.lengthE);
      }
      return this._point(tri - 2, this.D, this.lengthD);
    };

    $$$utils$path$$proto._pointAt = function (percent, path, length, offset) {
      var len = (percent * length + length + (offset || 0)) % length,
      point = path.getPointAtLength(len);
      return [point.x, point.y];
    };

    $$$utils$path$$proto._point = function (percent, path, length) {
      var point = this._pointAt(percent, path, length);
      point[0] /= 100;
      point[1] /= 34.132;
      return point;
    };

    $$$utils$path$$proto.normal = function (percent, negate) {
      var tri = percent * 3;
      if (tri < 1) {
        return this._normal(tri, this.R, this.lengthR, negate);
      } else if (tri < 2) {
        return this._normal(tri - 1, this.E, this.lengthE, negate);
      }
      return this._normal(tri - 2, this.D, this.lengthD, negate);
    };

    $$$utils$path$$proto._normal = function (percent, path, length, negate) {
      var point = this._pointAt(percent, path, length),
      pointL = this._pointAt(percent, path, length, 1),
      pointR = this._pointAt(percent, path, length, -1),
      leftV = this.leftV,
      rightV = this.rightV,
      t;

      $$vec2$$vec2.subtract(leftV, point, pointL);
      $$vec2$$vec2.subtract(rightV, point, pointR);

      t = leftV[0];
      leftV[0] = leftV[1];
      leftV[1] = -t;

      t = rightV[0];
      rightV[0] = -rightV[1];
      rightV[1] = t;

      $$vec2$$vec2.normalize(leftV, leftV);
      $$vec2$$vec2.normalize(rightV, rightV);

      $$vec2$$vec2.add(leftV, rightV, leftV);
      $$vec2$$vec2.normalize(leftV, leftV);

      if (negate) {
        $$vec2$$vec2.negate(leftV, leftV);
      }

      return leftV;
    };

    function canvases$tree$$TreeCanvas () {
      $$$player$canvas$$Canvas.call(this);
    }

    canvases$tree$$TreeCanvas.key = "tree";
    var canvases$tree$$proto = canvases$tree$$TreeCanvas.prototype = new $$$player$canvas$$Canvas();
    var canvases$tree$$branches = [];

    function canvases$tree$$Branch(x, y, nx, ny, len, wid) {
      this.x = x - nx * len;
      this.y = y - ny * len;
      this.nx = nx;
      this.ny = ny;
      this.length = len;
      this.width = wid;
      this.tillNext = 10;
    }

    var canvases$tree$$branchProto = canvases$tree$$Branch.prototype;

    canvases$tree$$branchProto.tick = function () {
      var angle = Math.atan2(this.nx, this.ny);
      if (this.width < 0.5) {
        return;
      }
      angle += (Math.random() - 0.5) * Math.PI * 0.2;

      this.tillNext--;
      if (this.tillNext < 0) {
        this.tillNext = 5 + Math.random() * 20;
        this.makeBranch();
      }

      this.x += this.nx * this.length;
      this.y += this.ny * this.length;
      this.nx = Math.sin(angle);
      this.ny = Math.cos(angle);
      this.width *= 0.96;
    };

    canvases$tree$$branchProto.makeBranch = function () {
      var angle = Math.atan2(this.nx, this.ny);
      var nx, ny;

      angle += (Math.random() - 0.5) * Math.PI;

      nx = Math.sin(angle);
      ny = Math.cos(angle);

      canvases$tree$$branches.unshift(new canvases$tree$$Branch(this.x, this.y, nx, ny, this.length, this.width));
    };

    canvases$tree$$branchProto.draw = function (c) {
      if (this.width < 0.5) {
        return;
      }
      c.beginPath();
      c.lineWidth(this.width);
      c.moveTo(this.x, this.y);
      c.lineTo(
        this.x + this.nx * this.length,
        this.y + this.ny * this.length
      );
      c.stroke();
    };

    canvases$tree$$proto.prepare = function () {
      var x = (this.bgw - this.fgw) / 2;
      var y = (this.bgh - this.fgh) / 2;

      this.fillStyle(this.primaryHex);
      this.fillRect(0, 0, this.width, this.height);

      if (this.isForeground) {
        this.setTransform(1, 0, 0, 1, 0, 0);
      } else {
        this.setTransform(1, 0, 0, 1, x, y);
      }

      while (canvases$tree$$branches.length) {
        canvases$tree$$branches.pop();
      }

      this.lineCap("round");
      this.strokeStyle(this.tertiaryHex);

      this.makeBranch();

      this._time = 0;
      this._next = 0;
    };

    canvases$tree$$proto.makeBranch = function () {
      var rand = Math.random(),
      p = $$$utils$path$$path.point(rand),
      normal = $$$utils$path$$path.normal(rand, this.isForeground),
      x = p[0] * this.fgw,
      y = p[1] * this.fgh,
      w = 5 + Math.random() * 20;

      x -= normal[0] * 10;
      y -= normal[1] * 10;

      canvases$tree$$branches.push(new canvases$tree$$Branch(x, y, normal[0], normal[1], 5, w));
    };

    canvases$tree$$proto._time = 0;
    canvases$tree$$proto._next = 0;

    canvases$tree$$proto.tick = function (ms) {
      if (ms > this._next) {
        this._next += 600;
        this.makeBranch();
      }
    };

    canvases$tree$$proto.draw = function () {
      var i, branch;
      for (i = 0; i < canvases$tree$$branches.length; i++) {
        branch = canvases$tree$$branches[i];
        branch.tick(this);
        branch.draw(this);
      }
    };

    canvases$tree$$proto.destroy = function () {
      while (canvases$tree$$branches.length) {
        canvases$tree$$branches.pop();
      }
      this.setTransform(1, 0, 0, 1, 0, 0);
      this.lineWidth(1);
    };

    function canvases$circles$$CircleCanvas () {
      $$$player$canvas$$Canvas.call(this);
      this.image = new $$$utils$image$data$$ImageData();
      this.image.setSrc(canvases$circles$$SRC);
      this.image.setScaleMode("cover");
    }

    canvases$circles$$CircleCanvas.key = "circle";
    var canvases$circles$$proto = canvases$circles$$CircleCanvas.prototype = new $$$player$canvas$$Canvas();
    var canvases$circles$$SRC = "img/tesla.jpg";
    var canvases$circles$$TAU = Math.PI * 2;
    $$$utils$image$cache$$preload(canvases$circles$$SRC);

    canvases$circles$$proto.prepare = function () {
      this.fillStyle(this.primaryHex).fillRect(0, 0, this.width, this.height);
      this.image.setWidthAndHeight(this.width, this.height);
      this.image.rebuild();
    };

    canvases$circles$$proto.drawAtPercent = function (t) {
      var size = Math.sqrt(Math.max(9, 1000 - 3000 * t));
      var count = 5 + t * 200;
      var i = -1;
      var x, y;

      while (++i < count) {
        x = this.randXCenter();
        y = this.randY();
        this.fillStyle(this.gradientMapHex(this.image.getPixelClamped(x, y)));
        this.beginPath().moveTo(x, y);
        this.arc(x, y, size, 0, canvases$circles$$TAU).closePath().fill();
      }
    };

    var $$$vendor$request$animation$frame$$lastTime = 0;
    var $$$vendor$request$animation$frame$$vendors = ["ms", "moz", "webkit", "o"];
    var $$$vendor$request$animation$frame$$requestAnimationFrame = window.requestAnimationFrame;
    var $$$vendor$request$animation$frame$$cancelAnimationFrame = window.cancelAnimationFrame;

    for (var $$$vendor$request$animation$frame$$x = 0; $$$vendor$request$animation$frame$$x < $$$vendor$request$animation$frame$$vendors.length && !$$$vendor$request$animation$frame$$requestAnimationFrame; ++$$$vendor$request$animation$frame$$x) {
      $$$vendor$request$animation$frame$$requestAnimationFrame = window[$$$vendor$request$animation$frame$$vendors[$$$vendor$request$animation$frame$$x]+"RequestAnimationFrame"];
      $$$vendor$request$animation$frame$$cancelAnimationFrame = window[$$$vendor$request$animation$frame$$vendors[$$$vendor$request$animation$frame$$x]+"CancelAnimationFrame"] || window[$$$vendor$request$animation$frame$$vendors[$$$vendor$request$animation$frame$$x]+"CancelRequestAnimationFrame"];
    }

    if (!$$$vendor$request$animation$frame$$requestAnimationFrame) {
      $$$vendor$request$animation$frame$$requestAnimationFrame = function(callback) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - $$$vendor$request$animation$frame$$lastTime));
        var id = window.setTimeout(function() {
          callback(currTime + timeToCall);
        }, timeToCall);
        $$$vendor$request$animation$frame$$lastTime = currTime + timeToCall;
        return id;
      };
    }

    if (!$$$vendor$request$animation$frame$$cancelAnimationFrame) {
      $$$vendor$request$animation$frame$$cancelAnimationFrame = function(id) {
        clearTimeout(id);
      };
    }

    var player$player$$COLORS = ["red", "black", "white"];

    var player$player$$COLOR_ARRAYS = [
      [255, 0, 0],
      [0, 0, 0],
      [255, 255, 255]
    ];

    var player$player$$ANIMATION_TIME = 10000;
    var player$player$$DEBUG = false;

    function player$player$$Player () {
      $(window).on("resize", this.resize.bind(this));
      $(window).on("click", this.nextCanvas.bind(this));
      this.tick = this.tick.bind(this);
    }

    var player$player$$proto = player$player$$Player.prototype;
    player$player$$proto.fgCanvas = null;
    player$player$$proto.bgCanvas = null;
    player$player$$proto.fgCtx = null;
    player$player$$proto.bgCtx = null;

    player$player$$proto.start = function () {
      this.last = +new Date();
      this.fgCanvas = $("#fg-canvas");
      this.bgCanvas = $("#bg-canvas");
      this.fgCtx = this.fgCanvas[0].getContext("2d");
      this.bgCtx = this.bgCanvas[0].getContext("2d");
      this.logo = $("#logo");
      this.resize();
      this.nextCanvas();
      this.tick();
    };

    player$player$$proto.fgw = 0;
    player$player$$proto.fgh = 0;
    player$player$$proto.bgw = 0;
    player$player$$proto.bgh = 0;

    player$player$$proto.resize = function () {
      this.fgw = this.logo.width();
      this.fgh = this.logo.height();
      this.bgw = $(window).width();
      this.bgh = $(window).height();
      this.fgCanvas.attr({
        width: this.fgw,
        height: this.fgh
      });
      this.bgCanvas.attr({
        width: this.bgw,
        height: this.bgh
      });
      this.canvasTime = 0;
      this.updateColors();
    };

    /*******************************
      Choosing a canvas
     *******************************/

    player$player$$proto.push = function (canvas) {
      this.canvases.push(canvas);
    };

    player$player$$proto.canvases = [];
    player$player$$proto.canvas = null;
    player$player$$proto.canvasIndex = 0;

    player$player$$proto.nextCanvas = function () {
      var canvases = this.canvases;
      var index = -1;
      var i;
      var hash = location.hash.replace("#", "");
      var Canvas;

      for (i = 0; i < canvases.length; i++) {
        if (canvases[i].key === hash) {
          index = i;
          break;
        }
      }

      if (index === -1 || this.canvasIndex === index) {
        this.canvasIndex = Math.floor(Math.random() * canvases.length);
      } else {
        this.canvasIndex = index;
      }

      this.isForeground = !this.isForeground;

      Canvas = canvases[this.canvasIndex];

      if (this.canvas) {
        this.canvas.destroy();
      }
      this.canvasTime = 0;
      this.canvas = new Canvas();
      this.changeColors();

      location.hash = Canvas.key;
    };

    /*******************************
      Updating Canvases
     *******************************/

    player$player$$proto.time = 0;

    player$player$$proto.last = +new Date();
    player$player$$proto.canvasTime = 0;

    player$player$$proto.tick = function () {
      var diff           = +new Date() - this.last;
      var canvasTime     = this.canvasTime + diff;
      var lastCanvasTime = this.canvasTime;

      this.last += diff;
      this.canvasTime += diff;

      if (diff > player$player$$ANIMATION_TIME) {
        // this could happen due to the tab not being active for a while
        diff = 0;
      }

      if (canvasTime > player$player$$ANIMATION_TIME) {
        this.nextCanvas();
        canvasTime = diff;
        lastCanvasTime = 0;
      }

      var canvas = this.canvas;

      canvas.tick(canvasTime);
      canvas.draw();
      canvas.drawAtTime(canvasTime);
      canvas.drawAtPercent(canvasTime / player$player$$ANIMATION_TIME);
      canvas.drawFromPercentToPercent(lastCanvasTime / player$player$$ANIMATION_TIME, canvasTime / player$player$$ANIMATION_TIME);

      if (player$player$$DEBUG) {
        this.setTimeout(this.tick, 500);
      } else {
        $$$vendor$request$animation$frame$$requestAnimationFrame(this.tick);
      }
    };

    /*******************************
      Changing Colors and Foreground
     *******************************/

    player$player$$proto.primary = 0;

    player$player$$proto.secondary = 0;
    player$player$$proto.tertiary = 0;
    player$player$$proto.colorPhase = Math.floor(Math.random() * 6) - 1;
    player$player$$proto.isForeground = Math.random() < 0.5;

    player$player$$proto.changeColors = function () {
      var classes = "",
      primary, secondary, tertiary;

      this.colorPhase = (this.colorPhase + 1) % 6;

      this.primary = primary = 2 - (this.colorPhase % 3);
      this.secondary = secondary = ~~(this.colorPhase / 2);
      this.tertiary = tertiary = ~~(((this.colorPhase + 3) % 6) / 2);

      classes += this.isForeground ? "is-fg bg-" : "is-bg fg-";
      classes += player$player$$COLORS[primary];

      $("body").removeClass().addClass(classes);
      this.updateColors();
    };

    player$player$$proto.updateColors = function () {
      if (!this.canvas) {
        return;
      }

      var i;
      var canvas = this.canvas;

      canvas.fgw = this.fgw;
      canvas.fgh = this.fgh;
      canvas.bgw = this.bgw;
      canvas.bgh = this.bgh;
      canvas.isForeground = this.isForeground;

      if (this.isForeground) {
        canvas.canvas = this.fgCanvas;
        canvas.ctx    = this.fgCtx;
        canvas.width  = this.fgw;
        canvas.height = this.fgh;
      } else {
        canvas.canvas = this.bgCanvas;
        canvas.ctx    = this.bgCtx;
        canvas.width  = this.bgw;
        canvas.height = this.bgh;
      }

      for (i = 0; i < 3; i++) {
        canvas.primary[i]   = player$player$$COLOR_ARRAYS[this.secondary][i];
        canvas.secondary[i] = player$player$$COLOR_ARRAYS[this.tertiary][i];
        canvas.tertiary[i]  = player$player$$COLOR_ARRAYS[this.primary][i];
      }
      canvas.updateColor();
      this.bgCtx.clearRect(0, 0, this.bgw, this.bgh);
      this.fgCtx.clearRect(0, 0, this.fgw, this.fgh);

      canvas.__prepare();
      canvas.prepare();
    };

    var index$$player = new player$player$$Player();
    index$$player.push(canvases$wave$$WaveCanvas);
    index$$player.push(canvases$triangle$$TriangleCanvas);
    index$$player.push(canvases$radial$wave$$RadialWaveCanvas);
    index$$player.push(canvases$donuts$$DonutsCanvas);
    index$$player.push(canvases$grid$$GridCanvas);
    index$$player.push(canvases$tree$$TreeCanvas);
    index$$player.push(canvases$circles$$CircleCanvas);
    index$$player.start();
}).call(this);