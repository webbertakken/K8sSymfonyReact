<?php

use App\Kernel;
use Symfony\Component\Debug\Debug;
use Symfony\Component\Dotenv\Dotenv;
use Symfony\Component\HttpFoundation\Request;

require __DIR__ . '/../vendor/autoload.php';

// Detect environment
if (!isset($_SERVER['APP_ENV'])) {
    // Ensure we don't use .env in production
    if (!class_exists(Dotenv::class)) {
        throw new \InvalidArgumentException(
            'APP_ENV environment variable is not defined. You need to define environment variables for configuration ' .
            'or add "symfony/dotenv" as a Composer dependency to load variables from a .env file.'
        );
    }
    (new Dotenv())->load(__DIR__ . '/../.env');
}

$env   = $_SERVER['APP_ENV'] ?? 'dev';
$debug = $_SERVER['APP_DEBUG'] ?? ('prod' !== $env);

// Enable dev tools
if ($debug) {
    umask(0000);
    /* @noinspection ForgottenDebugOutputInspection */
    Debug::enable();
}

// Set trusted proxies
$trustedProxies = $_SERVER['TRUSTED_PROXIES'] ?? false;
if ($trustedProxies) {
    Request::setTrustedProxies(
        explode(',', $trustedProxies),
        Request::HEADER_X_FORWARDED_ALL ^ Request::HEADER_X_FORWARDED_HOST
    );
}

// Set trusted hosts
$trustedHosts = $_SERVER['TRUSTED_HOSTS'] ?? false;
if ($trustedHosts) {
    Request::setTrustedHosts(explode(',', $trustedHosts));
}

// Handle lifecycle of a request
$kernel   = new Kernel($env, $debug);
$request  = Request::createFromGlobals();
$response = $kernel->handle($request);
$response->send();
$kernel->terminate($request, $response);
