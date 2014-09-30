/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package uned.fundamentos.progra.web;

import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.PathParam;
import javax.ws.rs.Consumes;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.GET;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author kener.fernandez
 */
@Path("/calc")
public class CalculadoraRESTfulWS {

    @Context
    private UriInfo context;

    /**
     /**
     * Creates a new instance of CaculadoraRESTfulWS
     */
    public CalculadoraRESTfulWS() {
    }

    /**
     *
     * @param left cantidad a la izquierda de la operacion
     * @param right cantidad a la derecha de la oepracion
     * @return
     */
    @Path("suma")
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public int suma(@QueryParam("left") int left, @QueryParam("right") int right)
    {
        return left + right;
    }
}