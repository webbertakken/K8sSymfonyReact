<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AppController extends AbstractController
{
    /**
     * @Route("/dashboard/demo")
     */
    public function demo()
    {
        return $this->render('demo/show.html.twig');
    }

    /**
     * @Route("/dashboard")
     */
    public function dashboard()
    {
        return $this->render('dashboard/show.html.twig');
    }
}
