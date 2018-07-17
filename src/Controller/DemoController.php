<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * Class DemoController.
 */
class DemoController extends AbstractController
{
    /**
     * @Route("/demo/{demoScene}", name="demo_scene")
     */
    public function scene(string $demoScene)
    {
        return $this->render('scene.html.twig', [
            'scene' => 'demo/' . $demoScene
        ]);
    }
}
