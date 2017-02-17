/**
 * An Ext JS 4 state provider implementation that saves and retrieves state as JSON
 * in window.name. Because everybody likes window.name, this implementation
 * allows for the use of namespace.
 *
 * Example:
 *
 *     var wnp = Ext.create('Ext.ux.state.WindowNameProvider', {
 *         target:    top,
 *         namespace: 'myplace'
 *     });
 *
 *     Ext.state.Manager.setProvider(wnp);
 *
 *     wnp.set('a', 1); wnp.set('b', 2);
 *     console.log(top.name); //would output:
 *     {"myplace": {"a": 1, "b": 1}}
 *
 **/
Ext.define('Ext.ux.state.WindowNameProvider', {
    extend: 'Ext.state.Provider',

    /**
     * @cfg {parent|top|window} target
     * The target whose name property is being written to.
     * This is useful only when you web app is iframed.
     * May be parent, top or window. Defaults to window. 
     */

    /**
     * @cfg {String} namespace
     * The name of the object where your values are stored.
     */

    /**
     * Creates a new WindowNameProvider.
     * @param {Object} [config] Config object.
     */
    constructor : function(config){
        var me = this;
        
        me.target = config.target || window;
        me.ns     = config.namespace || 'myplace';
        me.callParent(arguments);
        
        //read entire window.name string into object
        //state is only what's within the namespace property within that object
        me.state  = me.readTarget()[me.ns];
    },

    set : function(name, value){
        var me = this;
        //read entire window.name string into object
        var o = me.readTarget();
        //set property value into this instance namespace
        o[me.ns][name] = value;
        //write changed object as JSON string in window.name
        me.target.name = Ext.encode(o);
        //also sets this.state
        me.callParent(arguments);
    },

    clear : function(name){
        var me = this;
        //read entire window.name string into object
        var o = me.readTarget();
        //set property value to undefined into this instance namespace
        delete o[me.ns][name]; //only difference to the set method
        //write changed object as JSON string in window.name
        me.target.name = Ext.encode(o);
        //also sets this.state
        me.callParent(arguments);
    },

    // private
    readTarget : function(){
        var me = this, o;
        
        try {
            o = Ext.decode(me.target.name);
        } catch(e) {
            //create empty object
            o = {};
            
            //create namespace property within object
            o[me.ns] = {};
        }
        return o;
    }
});
