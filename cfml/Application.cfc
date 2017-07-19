<cfcomponent displayname="Application" hint="Application">
    <cffunction name="onAbort" returnType="boolean" description="Runs when you execute the tag cfabort">
        <cfargument name="targetPage" type="string" required="true">

        <cfreturn false>
    </cffunction>

    <cffunction name="onApplicationEnd" returnType="void" description="The application ends: the application times out, or the server is stopped">
        <cfargument name="ApplicationScope" required="true">
        
    </cffunction>

    <cffunction name = "onApplicationStart" returnType = "boolean" description = "The application first starts: the first request for a page is processed or the first CFC method is invoked by an event gateway instance, or a web services or Flash Remoting CFC.">

        <cfreturn true>
    </cffunction>

    <cffunction name="onSessionStart" returnType="void" description="A session starts">

    </cffunction>

    <cffunction name="onSessionEnd" returnType="void" description="A session ends">
        <cfargument name="SessionScope" required=True>
        <cfargument name="ApplicationScope" required=False>

    </cffunction>

    <cffunction name="oncfcRequest" returnType="void" description="HTTP or AMF calls are made to an application">
        <cfargument type="string" name="cfcname">
        <cfargument type="string" name="method">
        <cfargument type="struct" name="args">

    </cffunction>

    <cffunction name="onError" returnType="void" description="An exception that is not caught by a try/catch block occurs">
        <cfargument name="Exception" required=true>
        <cfargument name="EventName" type="String" required=true>

        <cfdump var="#Exception#">
        <cfdump var="#EventName#">
    </cffunction>

    <cffunction name="onMissingTemplate" returnType="boolean" description="ColdFusion received a request for a non-existent page">
        <cfargument type="string" name="targetPage" required=true>

        <cfreturn true>
    </cffunction>

    <cffunction name="onRequestStart" returnType="boolean" description="A request starts">
        <cfargument type="String" name="targetPage" required=true>

        <cfreturn true>
    </cffunction>

    <cffunction name="onRequest" returnType="void" description="The onRequestStart method finishes. (This method can filter request contents.)">
        <cfargument name="targetPage" type="String" required=true/> 

        <cfinclude template="#Arguments.targetPage#"> 

    </cffunction>

    <cffunction name="onRequestEnd" returnType="void" description="All pages in the request have been processed">
        <cfargument type="String" name="targetPage" required=true>

    </cffunction>
</cfcomponent>
